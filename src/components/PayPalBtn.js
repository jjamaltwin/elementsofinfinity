import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';






export function PayPalBtn(props) {
const { amount, currency, createOrder, createSubscription, onApprove, catchError,onError, onCancel} = props;
const paypalKey = "ATAVNTRDER2TT4YeejbEvs7n1-PpJumVMnP6pEXQxZlq_8v6z9pb-Rbq7_qD2wYtxVzzkT-7ftY7_jAP&currencyUSD"
return (
<PayPalButton
amount={amount}
currency={currency}
createOrder={(data, details) => createOrder(data, details)}
onApprove={(data, details) => onApprove(data, details)}
onError={(err) => onError(err)}
catchError={(err) => catchError(err)}
onCancel={(err) => onCancel(err)}
options={{
clientId: paypalKey,
vault:true
}}
style={{
shape: 'pill',
color: 'gold',
layout: 'vertical',
label: 'paypal',
}}
/>
);
}
export default PayPalBtn;