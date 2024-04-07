import { SocialIcon } from "react-social-icons";
import CurrencyFlag from "react-currency-flags";
import PaymentIcon from "react-payment-icons";
import Divider from "../Divider";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import "./styles.css";

const ECommerceFooter = () => {
  const isMobileDevice = useMediaQuery("(max-width:767px)");
  return (
    <div className="footer">
      <div className="contact-info-container">
        <div>
          <h2>BE THE FIRST TO KNOW</h2>
          <p className="sigup-for-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <p className="sigup-for-lg">Sigup for updates for the mettamuse</p>
          <div className="email-subscribe-container">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="email-input"
            />
            <button type="button" className="subscribe-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
        {isMobileDevice ? <Divider className="horizontal-line" /> : null}
        <div>
          <h2>CALL US</h2>
          <p>
            <a className="contact-details" href="tel:+4733378901">
              +47 333 78 901
            </a>{" "}
            *{" "}
            <a
              className="contact-details"
              href="mailto:customercare@mettamuse.com"
            >
              customercare@mettamuse.com
            </a>
          </p>
          {isMobileDevice ? <Divider className="horizontal-line" /> : null}
          <h2>CURRENCY</h2>

          <p>
            <CurrencyFlag currency="USD" size="sm" /> USD
          </p>
        </div>
      </div>
      {isMobileDevice ? <Divider className="horizontal-line" /> : null}
      {isMobileDevice ? null : <Divider className="horizontal-line" />}
      {isMobileDevice ? (
        <div>
          <h2>metta muse</h2>
          <Divider />
          <h2>QUICK LINKS</h2>
          <Divider />
          <h2>FOLLOW US</h2>
          <Divider />
          <div>
            <h4 className="header">metta muse ACCEPTS</h4>
            <div className="payment-methods">
              <PaymentIcon
                id="visa"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
              <PaymentIcon
                id="mastercard"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
              <PaymentIcon
                id="paypal"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
              <PaymentIcon
                id="amex"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
              <PaymentIcon
                id="hsbc"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
              <PaymentIcon
                id="ebay"
                style={{ margin: 5, width: 50 }}
                className="payment-icon"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-content-lg">
          <ul className="footer-details">
            <h4 className="header">metta muse</h4>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
          <ul className="footer-details">
            <h4 className="header">QUICK LINKS</h4>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policies</li>
            <li>Terms & Conditions</li>
          </ul>
          <div>
            <div className="footer-details">
              <h4 className="header">FOLLOW US</h4>
              <SocialIcon fallback="instagram" className="follow-us-icon" />
              <SocialIcon fallback="linkedin" className="follow-us-icon" />
            </div>
            <div className="footer-details">
              <h4 className="header">metta muse ACCEPTS</h4>
              <div className="payment-methods">
                <PaymentIcon
                  id="visa"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
                <PaymentIcon
                  id="mastercard"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
                <PaymentIcon
                  id="paypal"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
                <PaymentIcon
                  id="amex"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
                <PaymentIcon
                  id="hsbc"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
                <PaymentIcon
                  id="ebay"
                  style={{ margin: 5, width: 50 }}
                  className="payment-icon"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-copyright">
        <p>Copyright &#169; 2024 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ECommerceFooter;
