import React, { useState } from "react";
import './cardpayment.css'
function CardPayment(){
const[paymentDetail,setPaymentDetail]=useState({
    card:{
        credit:{
            name:"",
            number:"",
            expiery:"",
            cvc:""
        }
    }
})
function handleChaneg(e){
    let value = e.target.vlaue.replace(/\D/g,"");
    
    value=value.slice(0,4);
    if(value.length>=3){
        value=value.slice(0,2)+"/"+value.slice(2);
    }
    
}

    return(
        <div className="cardpayment-container">
            <div className="payment-card-info">
                <label htmlFor="card number">
                    card number
                    <input type="text" name="number" value={paymentDetail.card.credit.number} placeholder="0000 0000 0000 0000" onChange={handleChaneg}/>
                </label>
                <label htmlFor="card expiery">
                    card expiery
                    <input type="text" name="expiery" value={paymentDetail.card.credit.expiery} placeholder="MM/YY" onChange={handleChaneg}/>
                </label>
                <label htmlFor="cvc">
                    cvc
                    <input type="text" name="cvc" value={paymentDetail.card.credit.cvc} placeholder="3-digit code" onChange={handleChaneg}/>
                </label>
            </div>
        </div>
    )
}
export default CardPayment;