import React from "react";

class FnPay extends React.Component {
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
                  <option value="For The Love or Money">
                    For The Love or Money $44.00 USD
                  </option>
                  <option value="333 Affirmations & Intentions Workobook">
                    333 Affirmations & Intentions Workobook $27.50 USD
                  </option>
                  <option value="Book Bundle">Book Bundle $66.55 USD</option>
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
          alt
          border={0}
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width={1}
          height={1}
        />
      </form>
    );
  }
}

export default FnPay;
