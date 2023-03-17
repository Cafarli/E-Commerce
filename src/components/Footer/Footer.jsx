import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-pages">
        <div className="fp-mail">
          <Link to="/">
            <h1>Hekto</h1>
          </Link>
          <div className="fpm-box">
            <div className="fpm-mailbox">
              <input placeholder="Enter Email Address" />
              <button>Sign Up</button>
            </div>
            <p>
              Contact Info
              <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>
        <div className="fp-categories">
          <div className="fp-page information">
            <p>INFORMATION</p>
            <ul>
              <ol>
                <Link to="/blogs">Blog</Link>
              </ol>
              <ol>
                <Link to="/about">About Us</Link>
              </ol>
              <ol>
                <Link to="/privacy-policy" >Privacy Policy</Link>
              </ol>
              <ol>
                <Link to="/terms-conditions" >Terms & Conditions</Link>
              </ol>
              <ol>
                <Link to="/cookies" >Cookies</Link>
              </ol>
            </ul>
          </div>
          <div className="fp-page categories">
            <p>CATEGORIES</p>
            <ul>
              <ol>
                <Link>Laptops & Computers</Link>
              </ol>
              <ol>
                <Link>Cameras & Photography</Link>
              </ol>
              <ol>
                <Link>Smart Phones & Tablets</Link>
              </ol>
              <ol>
                <Link>Video Games & Consoles</Link>
              </ol>
              <ol>
                <Link>Waterproof Headphones</Link>
              </ol>
            </ul>
          </div>
          <div className="fp-page customerCare">
            <p>CUSTOMER CARE</p>
            <ul>
              <ol>
                <Link to="/login">My Account</Link>
              </ol>
              <ol>
                <Link>Discount</Link>
              </ol>
              <ol>
                <Link>Returns</Link>
              </ol>
              <ol>
                <Link>Order History</Link>
              </ol>
              <ol>
                <Link>Order Tracking</Link>
              </ol>
              <ol>
                <Link to="/faq">Faq</Link>
              </ol>
            </ul>
          </div>
        </div>
      </div>
      <div className="f-copy">
        <p>CEAT&copy;All Rights Reserved</p>
        <div className="fc-medias">
          <ul>
            <ol>
              <a href="https://facebook.com">
                <BsFacebook />
              </a>
            </ol>
            <ol>
              <a href="https://facebook.com">
                <BsInstagram />
              </a>
            </ol>
            <ol>
              <a href="https://facebook.com">
                <BsTwitter />
              </a>
            </ol>
          </ul>
        </div>
      </div>
    </div>
  );
}
