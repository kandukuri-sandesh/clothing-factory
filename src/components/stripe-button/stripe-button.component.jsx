import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100
    const publicKey = "pk_test_51K8m5wSIK8rzuSI8pcIG2T5TAoFaE5TwYL17uoUsoq1qDgxGPQvoutEfGKAKNOX0zL5fIXAyTUXv8GGI87V7h3ai00LAeDoTS6"
    
    const onToken = token => {
        console.log(token);
        alert("Payment Succesful,Product will NEVER reach you ...!")
    }
    
    
    return(
      <StripeCheckout
      label = "Pay Now"
      name = "CRWN Clothing Ltd"
      shippingAdress
      billingAddress
      image = "htpps://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount = {priceForStripe}
      panelLabel="Pay Now"
      token = {onToken}
      stripeKey={publicKey}
      />
    )
}


export default StripeCheckoutButton