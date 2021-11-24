import React from "react";
import { Image } from "react-bootstrap";
import FnPay from "../components/FnPay";
import Footer from "./Footer";
import NewPay from "./newpay";



class PayPal extends React.Component {
  render() {
    return (
      <div>

      <div className="paypay">
      <div className="paypal-wrap">
        <h2>Author Aminah Infinity</h2>
        <p>
          I Am a new Author of For The Love Or Money. Grateful for my creativity
          and happy I did heart work! Also checkout 333 Affirmations &
          Intentions Workbook. Books 3, and 4 are in the works!
        </p>
        <Image id="firstbook" src="ftlom.jpg" alt="$$" opacity="1" />
        <Image id="secondbook" src="333.jpg" alt="333" opacity="1" />
        <h4 opacity="1"color="white">Book Selection now 50% off!!</h4>
        <FnPay/>
       
      </div>
      </div>
        <Footer/>

      </div>
      
    );
  }
}

export default PayPal;
