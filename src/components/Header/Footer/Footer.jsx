import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formatteDate = `${month + 1}/${date}/${year}`;
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">About ZAPH TOURS</h3>
            <p className="footer-text">
              Zaph Tours isn't just any travel company; we're your key to
              unlocking Kenya's magic. With expert planning and a deep love for
              Kenya, we craft extraordinary safaris and adventures that will
              leave you with memories that last a lifetime.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-link">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="footer-social-link">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Explore More</h3>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/destination" className="footer-link">
                  Destination
                </a>
              </li>
              <li>
                <a href="/trips" className="footer-link">
                  TRips
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Office Hours</h3>
            <div className="footer-hrs">
              <p> 8:30 to 4:00 Monday through Friday.</p>
              <p>
                <span>Saturday: </span>09:00 - 17:30
              </p>
              <p>
                <span>Sunday: </span>closed
              </p>
            </div>
            <ul className="footer-contact">
              <li>
                <span className="footer-contact-item">
                  Email:{" "}
                  <a href="mailto:info@zaphtours.com" className="footer-link">
                    info@zaphtours.com
                  </a>
                </span>
              </li>
              <li>
                <span className="footer-contact-item">
                  Phone:{" "}
                  <a href="tel:+1234567890" className="footer-link">
                    +254 789 548
                  </a>
                </span>
              </li>
              <li>
                <span className="footer-contact-item">
                  Address:Kenyatta Avenue, Nairobi, TC 1700
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {formatteDate} Zaph Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
