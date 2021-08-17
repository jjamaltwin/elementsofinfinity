import React from 'react';
import { Image } from 'react-bootstrap';
import PayPalBtn from "../components/PayPalBtn";



const paypalSubscribe = (data, actions) => {
return actions.subscription.create({
'plan_id': "<plan-id>",
});
};
// const paypalOnError = (err) => {
// console.log("Error")
// }
// const paypalOnApprove = (data, detail) => {
// // call the backend api to store transaction details
// console.log("Payapl approved")
// console.log(data.subscriptionID)
// };

const paypalOnApprove = (data, actions) => {
  return actions.order.capture().then(function(details) {
    alert('Transaction completed by ' + details.payer.name.given_name + '!');
  });
}, 
 paypalOnError = (err) => {
  console.log(err);
}

var shipping = 0;
var itemOptions = document.querySelector("#smart-button-container #item-options");

var quantity = parseInt();
var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
if (!isNaN(quantity)) {
  quantitySelect.style.visibility = "visible";
}
var orderDescription = 'Author Aminah Infinity';
if(orderDescription === '') {
  orderDescription = 'Item';
}




 function paypalCreateOrder(data, actions) {
  var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
  var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
  var tax = (0 === 0) ? 0 : (selectedItemPrice * (parseFloat(0)/100));
  if(quantitySelect.options.length > 0) {
    quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
  } else {
    quantity = 1;
  }

  tax *= quantity;
  tax = Math.round(tax * 100) / 100;
  var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
  priceTotal = Math.round(priceTotal * 100) / 100;
  var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;

  return actions.order.create({
    purchase_units: [{
      description: orderDescription,
      amount: {
        currency_code: 'USD',
        value: priceTotal,
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: itemTotalValue,
          },
          shipping: {
            currency_code: 'USD',
            value: shipping,
          },
          tax_total: {
            currency_code: 'USD',
            value: tax,
          }
        }
      },
      items: [{
        name: selectedItemDescription,
        unit_amount: {
          currency_code: 'USD',
          value: selectedItemPrice,
        },
        quantity: quantity
      }]
    }]
  });
}

function PayPal() {
return (
<div className="PayPal">
<div id="smart-button-container">
        <div style={{textAlign: "center;"}}>
          <div id="header" style={{marginBottom: "1.25rem"}}>
            <h2>Author Aminah Infinity</h2>
            <div id="bookwrap">
              <Image id="firstbook" src="ftlom.jpg" alt="$$" opacity="1" />
              <Image id="secondbook" src="333.jpg" alt="333" opacity="1" />
            </div>
            <select id="item-options"><option value="For The Love or Money " price="88.00">For The Love or Money  - 88.00 USD</option><option value="333 Affirmations & Intentions Workbook" price="55.00">333 Affirmations & Intentions Workbook - 55.00 USD</option><option value="Both " price="111.00">Both  - 111.00 USD</option></select>
            <select style={{visibility: "hidden"}} id="quantitySelect"></select>
          </div>
      
        </div>
      </div>

<PayPalBtn
amount = ""
currency = "USD"
createOrder={paypalCreateOrder}
onApprove={paypalOnApprove}
catchError={paypalOnError}
onError={paypalOnError}
onCancel={paypalOnError}
/>
</div>
);
}
export default PayPal;



