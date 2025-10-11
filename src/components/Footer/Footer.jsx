import React, { useState } from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      alert(emailError)
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      alert(emailError)
      return;
    }

    // Clear error and process submission
    setEmailError('');
    alert('Email submitted:', email);
    setEmail(''); // Clear input
  };

  return (

    <footer className="py-5 bg-light" id='contact-section'>
      <style>
        {`
          .footer-logo {
            font-size: 2rem;
            font-weight: bold;
            text-decoration: none;
            color: #000;
          }
          .footer-logo span {
            color: #ff9500;
            font-size: 2.5rem;
          }
          .footer-links {
            list-style: none;
            padding: 0;
          }
          .footer-links li {
            margin-bottom: 0.75rem;
          }
          .footer-links a {
            color: rgb(65, 65, 65);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-links a:hover {
            color: #ff9500;
          }
          .email-input {
            padding: 8px 12px;
            border: 1px solid rgb(65, 65, 65);
            border-radius: 4px 0 0 4px;
            font-size: 0.9rem;
            width: 200px;
            max-width: 100%;
          }
          .email-button {
            padding: 8px 12px;
            background-color: #ff9500;
            border: none;
            border-radius: 0 4px 4px 0;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .email-button:hover {
            background-color: #e68a00;
          }
            .email-error {
            color: #ff0000;
            font-size: 0.8rem;
            margin-top: 5px;
          }
          @media (max-width: 575.98px) {
            .email-input {
              width: 100%;
              border-radius: 4px;
              margin-bottom: 10px;
            }
            .email-button {
              width: 100%;
              border-radius: 4px;
            }
            .email-container {
              flex-direction: column;
            }
          }
        `}
      </style>
      <div className="container px-5" style={{ maxWidth: '1400px' }}>
        <div className="row g-4">
          {/* Logo and Description */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-0">
            <Link to="/" className="footer-logo d-block mb-3 ms-0">
              Gr<span>o</span>cify
            </Link>
            <p className="text-muted mb-3" style={{ maxWidth: '350px' }}>
              Bred for a high content of beneficial substances. Our products are all fresh and healthy.
            </p>
            <p className="text-muted mb-0">2025 &copy; All Rights Reserved</p>
          </div>

          {/* Company Links */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h5 className="text-muted fw-bold mb-3">Company</h5>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ'S</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h5 className="text-muted fw-bold mb-3">Support</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Support center</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h5 className="text-muted fw-bold mb-3">Stay Connected</h5>
            <p className="text-muted mb-3">
              Questions or Feedback?
              <br />
              We'd love to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="d-flex email-container">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email Address"
                className={`email-input ${emailError ? 'email-input-error' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="email-button" aria-label="Submit email">
                <ArrowForwardIosRoundedIcon style={{ fontSize: '1rem' }} />
              </button>
            </form>
            {emailError && <p className="email-error">{emailError}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer