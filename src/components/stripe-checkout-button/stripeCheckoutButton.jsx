import React from "react";
// Stripe Element Import
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = props => {
  const onToken = token => {
    console.log("Payment Token for charges", token);
    alert("Thank you for the Payment!");
  };

  const { total } = props;
  const totalInCents = total * 100; // 1 dollar equals 100 cents
  return (
    <StripeCheckout
      label="Pay Now" // text inside the Stripe button
      name="Cloth-Zone Corporation" // the pop-in header title
      description={`Total $${total}`} // the pop-in header subtitle
      shippingAddress
      billingAddress
      image="https://i.ibb.co/HBjR4mT/icon.png" // the pop-in header image (default none)
      amount={totalInCents} // cents
      panelLabel="Pay Money" // prepended to the amount in the bottom pay button
      token={onToken}
      stripeKey="pk_test_tDO2SjFNmhTSR4wwDmjuixFw007Amza6fU"
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
