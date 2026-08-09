import express from "express";
import razorpay from "../../config/razorpay/razorpay.js";
import crypto from 'crypto'
const PaymentRouter = express.Router();

PaymentRouter.post("/create-order", async (req, res) => {

    try {

        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({
                message: "Amount is required"
            });
        }

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to create Razorpay order"
        });
    }
});

PaymentRouter.post("/verify", async (req, res) => {

    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;


        // Create the string that Razorpay expects
        const body =
            razorpay_order_id +
            "|" +
            razorpay_payment_id;


        // Generate signature using your SECRET
        const expectedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(body)
                .digest("hex");


        // Compare Razorpay signature
        if (expectedSignature === razorpay_signature) {

            return res.status(200).json({
                success: true,
                message: "Payment verified successfully"
            });

        }


        // Signature doesn't match
        return res.status(400).json({
            success: false,
            message: "Payment verification failed"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong while verifying payment"
        });
    }
});

export default PaymentRouter;