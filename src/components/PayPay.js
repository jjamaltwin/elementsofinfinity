import React from "react";

class PayPay extends React.Component {
  render() {
    return (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" defaultValue="_s-xclick" />
        <input
          type="hidden"
          name="hosted_button_id"
          defaultValue="LKBHT5PUWLQVS"
        />
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="hidden"
                  name="on0"
                  defaultValue="Book Selections"
                />
                Book Selections
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option className="opt" value="For The Love or Money">
                    For The Love or Money $88.00 USD
                  </option>
                  <option className="opt"value="333 Affirmations & Intentions Workobook">
                    333 Affirmations & Intentions Workobook $55.00 USD
                  </option>
                  <option className="opt" value="Book Bundle">Book Bundle $111.00 USD</option>
                </select>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <input type="hidden" name="currency_code" defaultValue="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border={0}
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border={0}
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width={1}
          height={1}
        />
      </form>
    );
  }
}

export default PayPay;
