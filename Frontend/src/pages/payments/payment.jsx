import React, { useState } from "react";
import './payment.css'
import Sidebar from "../../components/Sidebar/sidebar";
import Hamburger from "../../components/Hamburger/Hamburger.jsx";
import axios from 'axios';


function loadRazorpay() {

    return new Promise((resolve) => {

        if (window.Razorpay) {
            resolve(true);
            return;
        }

        const script = document.createElement("script");

        script.src =
            "https://checkout.razorpay.com/v1/checkout.js";

        script.onload = () => {
            resolve(true);
        };

        script.onerror = () => {
            resolve(false);
        };

        document.body.appendChild(script);
    });
}



function Payment({show,setShow}){
    const amount = 5;
    const [selectedMethod, setSelectedMethod]=useState("card");



    async function handlePayment() {

    const isLoaded = await loadRazorpay();

    if (!isLoaded) {
        alert("Razorpay SDK failed to load");
        return;
    }

    try {

        // Ask backend to create Razorpay order
        const response = await axios.post(
            "http://localhost:3000/api/payment/create-order",
            {
                amount: amount
            },
            {
                withCredentials: true
            }
        );
        console.log("Backend response:", response.data);
        const order = response.data.order;

        console.log("Razorpay order:", order);

        const options = {

            key: import.meta.env.VITE_RAZORPAY_KEY_ID,

            amount: order.amount,

            currency: order.currency,

            name: "Your Website",

            description: "Premium Plan",

            order_id: order.id,

            
            // ==================================
            // PAYMENT VERIFICATION GOES HERE
            // ==================================

            handler: async function (response) {

                try {

                    console.log(
                        "Razorpay response:",
                        response
                    );


                    // Send payment details to backend
                    const verifyResponse =
                        await axios.post(
                            "http://localhost:3000/api/payment/verify",

                            {
                                razorpay_order_id:
                                    response.razorpay_order_id,

                                razorpay_payment_id:
                                    response.razorpay_payment_id,

                                razorpay_signature:
                                    response.razorpay_signature
                            }
                        );


                    // Backend says signature is valid
                    if (verifyResponse.data.success) {

                        console.log(
                            "Payment verified successfully"
                        );

                        alert("Payment successful!");

                    } else {

                        alert(
                            "Payment verification failed"
                        );
                    }


                } catch (error) {

                    console.error(
                        "Payment verification error:",
                        error
                    );

                    alert(
                        "Payment verification failed"
                    );
                }
            },

            prefill: {
                name: "Customer Name",
                email: "customer@example.com",
                contact: "9999999999"
            },

            theme: {
                color: "#3399cc"
            }
        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (error) {

        console.error("PAYMENT ERROR:", error);
    console.error("RESPONSE:", error.response?.data);
    console.error("STATUS:", error.response?.status);

    alert("Unable to start payment");
    }
}


    return(
        <div className="payment-container">
            <Sidebar show={show} setShow={setShow}/>
            <Hamburger show={show} setShow={setShow}/>
            <div className="payment-info">
                
                {/* Left side - Payment information */}
                <div className="payment-left">

                    <h1>Complete your payment</h1>

                    <p className="subtitle">
                        Choose your preferred payment method
                    </p>

                    {/* Payment methods preview */}
                    <div className="payment-methods">

                        <div className={`payment-method ${selectedMethod==="card"?"active":""}`} onClick={()=>setSelectedMethod("card")}>
                            <div className="method-icon">💳</div>

                            <div>
                                <h3>Cards</h3>
                                <p>Credit / Debit Card</p>
                            </div>
                        </div>

                        <div className={`payment-method ${selectedMethod==="upi"?"active":""}`} onClick={()=>setSelectedMethod("upi")}>
                            <div className="method-icon">📱</div>

                            <div>
                                <h3>UPI</h3>
                                <p>Google Pay, PhonePe, Paytm</p>
                            </div>
                        </div>

                        <div className={`payment-method ${selectedMethod==="netbanking"?"active":""}`} onClick={()=>setSelectedMethod("netbanking")}>
                            <div className="method-icon">🏦</div>

                            <div>
                                <h3>Net Banking</h3>
                                <p>All major banks</p>
                            </div>
                        </div>

                        <div className={`payment-method ${selectedMethod==="wallet"?"active":""}`} onClick={()=>setSelectedMethod("wallet")}>
                            <div className="method-icon">👛</div>

                            <div>
                                <h3>Wallets</h3>
                                <p>Available wallets</p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Right side - Order summary */}
                <div className="payment-right">

                    <div className="order-card">

                        <h2>Order Summary</h2>

                        <div className="product">
                            <div className="product-image">
                                🛒
                            </div>

                            <div className="product-info">
                                <h3>Premium Plan</h3>
                                <p>1 × ₹{amount}</p>
                            </div>

                            <strong>₹{amount}</strong>
                        </div>

                        <div className="divider"></div>

                        <div className="price-row">
                            <span>Subtotal</span>
                            <span>₹{amount}</span>
                        </div>

                        <div className="price-row">
                            <span>Tax</span>
                            <span>₹0</span>
                        </div>

                        <div className="divider"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹{amount}</strong>
                        </div>

                        <button
                            className="pay-button"
                            onClick={handlePayment}
                        >
                            Pay ₹{amount}
                        </button>

                        <p className="secure-payment">
                            🔒 Secure payment powered by Razorpay
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Payment;