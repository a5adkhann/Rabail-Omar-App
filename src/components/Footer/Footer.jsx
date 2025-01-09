import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2">
        <div className="grid grid-cols-4 container mx-auto px-36 py-20">
            <div className="footer-img">
                <img src="./assets/logo.png" alt="" />
            </div>
            <div>
                <p className="font-semibold py-3 heading">Information</p>
                <p>About Us</p>
                <p>Shipping Policy</p>
                <p>Return & Exchange Policy</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
            </div>
            <div>
                <p className="font-semibold py-3 heading">Quick links</p>
                <p>Formals</p>
                <p>Mommy & Me</p>
                <p>Luxury Pret</p>
                <p>RB Kids</p>
            </div>
            <div>
                <p className="font-semibold py-3 heading">Contact Info</p>
                <p><span className="heading font-semibold">Email:</span> rabailomar@gmail.com</p>
                <p><span className="heading font-semibold">Address:</span> 80/1, Street 2, Khayaban Badar, Phase 6, DHA,Karachi.</p>
                <p><span className="heading font-semibold">Phone:</span> +92322-2737090</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
