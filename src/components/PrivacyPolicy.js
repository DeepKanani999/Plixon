import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";
import PageBanner from "./PageBanner";
import UserInfoPopup from "./userDetailPopup";

const PrivacyPolicy = () => {
  const [showBar, setShowBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () => {
    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    // Check screen width
    const isMobileScreen = window.innerWidth <= 768;

    // Check if device has touch capability
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isMobileUserAgent || (isMobileScreen && hasTouchScreen);
  };

  useEffect(() => {
    // Initial check
    setIsMobile(isMobileDevice());

    // Add resize listener
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917779096777"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/DV8NxwoPHecb7eh4A", "_blank");
  };
  const handleWhatsApp = () => {
    const phoneNumber = "917779096777"; // Replace with your number
    const defaultMessage = `Hi, I'm interested in your products. Could you please provide more details?`;

    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleMail = () => {
    window.location.href = "mailto:info@plixon.in"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/yourprofile", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <Layout>
      {mounted && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )}
      <PageBanner title={"Privacy Policy"} />
      <div
        className={`floating-social-bar ${showBar ? "visible" : ""}`}
        style={{
          position: "fixed",
          bottom: 10,
          left: "50%",
          transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
          width: "80%",
          backgroundColor: "#fff",
          zIndex: 9999,
          justifyContent: "",
          alignItems: "center",
          transition: "transform 0.3s ease-in-out",
          borderRadius: "10px 10px 10px 10px",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="d-none d-md-flex row"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Optional: Makes it responsive
              width: "95%",
            }}
          >
            {/* Left Section: Main Social Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                className="social-main-btn"
                onClick={handleCall}
                style={{
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: "#FFF",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src="/assets/images/black-icons/phone_black.svg"
                    alt="Call"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                Call Us
              </button>
              <button
                className="social-main-btn"
                onClick={handleLocation}
                style={{
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: "#FFF",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src="/assets/images/black-icons/location_black.svg"
                    alt="Call"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                Location
              </button>
              <button
                className="social-main-btn"
                onClick={() => {
                  const userInfo = sessionStorage.getItem("userInfo");
                  if (isMobile) {
                    handleWhatsApp(); // Directly open WhatsApp on mobile
                  } else {
                    if (!userInfo) {
                      setIsPopupOpen(true); // Open the popup if session data is not available
                    } else {
                      handleWhatsApp();
                    }
                  }
                }}
                style={{
                  width: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: "#FFF",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src="/assets/images/black-icons/whatsapp_black.svg"
                    alt="Call"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                WhatsApp
              </button>
              <button
                className="social-main-btn"
                onClick={handleMail}
                style={{
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: "#FFF",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src="/assets/images/black-icons/gmail_black.svg"
                    alt="Call"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                Mail Us
              </button>
            </div>

            {/* Right Section: Rounded Social Buttons */}
            <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
              <button className="social-rounded-btn" onClick={handleFacebook}>
                <img
                  src="/assets/images/social-media-icons/Facebook.svg"
                  alt="Facebook"
                />
              </button>
              <button className="social-rounded-btn" onClick={handleInstagram}>
                <img
                  src="/assets/images/social-media-icons/Instagram.svg"
                  alt="Instagram"
                />
              </button>
              <button className="social-rounded-btn" onClick={handleLinkedIn}>
                <img
                  src="/assets/images/social-media-icons/Linkedin.svg"
                  alt="LinkedIn"
                />
              </button>
              <button className="social-rounded-btn" onClick={handleShare}>
                <img
                  src="/assets/images/social-media-icons/Share.svg"
                  alt="Share"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="privacy-container"
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          className="privacy-header"
          style={{ marginBottom: "40px", textAlign: "center" }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Privacy Policy for Plixon Smart TVs
          </h1>
          <p style={{ color: "#666" }}>Last updated: May 27, 2025</p>
        </div>

        <div className="privacy-content" style={{ lineHeight: "1.6" }}>
          <section style={{ marginBottom: "30px" }}>
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              1. Interpretation and Definitions
            </h2>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Interpretation
            </h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Definitions
            </h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party.
              </li>
              <li>
                <strong>Company</strong> refers to Pixelview Technologies India
                Private Limited, B/H, Angel Madras Cafe, M-167, 4, Akshar Marg,
                near Amin Marg, Gujarat Housing Board, Kotecha Nagar, Rajkot,
                Gujarat 360001.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Website</strong> refers to Plixon Smart TVs, accessible
                from{" "}
                <a href="https://plixon.in/" style={{ color: "#007bff" }}>
                  https://plixon.in/
                </a>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              2. Collecting and Using Your Personal Data
            </h2>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Types of Data Collected
            </h3>

            <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              Personal Data
            </h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You, including but not limited to:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>

            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Usage Data
            </h4>
            <p>
              Usage Data is collected automatically when using the Service and
              may include information such as Your Device's Internet Protocol
              address, browser type, browser version, the pages of our Service
              that You visit, the time and date of Your visit, and other
              diagnostic data.
            </p>

            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Tracking Technologies and Cookies
            </h4>
            <p>
              We use Cookies and similar tracking technologies to track activity
              on Our Service and store certain information. You can instruct
              Your browser to refuse all Cookies or to indicate when a Cookie is
              being sent.
            </p>
            <p>
              We use both Session and Persistent Cookies for purposes such as:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Essential website functionality</li>
              <li>Cookies policy acceptance</li>
              <li>Remembering user preferences</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              3. Use of Your Personal Data
            </h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You</li>
              <li>
                To provide You with news, special offers and general information
              </li>
              <li>To manage Your requests</li>
              <li>For business transfers</li>
              <li>For data analysis and service improvement</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              4. Sharing Your Personal Data
            </h2>
            <p>
              We may share Your personal information in the following
              situations:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>With Service Providers</li>
              <li>For business transfers</li>
              <li>With Affiliates</li>
              <li>With business partners</li>
              <li>With other users in public areas</li>
              <li>With Your consent</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              5. Data Retention and Security
            </h2>
            <p>
              We will retain Your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We implement
              appropriate security measures to protect your data, though no
              method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              6. Children's Privacy
            </h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              7. Changes to this Privacy Policy
            </h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                By email:{" "}
                <a href="mailto:support@plixon.in" style={{ color: "#007bff" }}>
                  support@plixon.in
                </a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <a
                  href="https://plixon.in/contact/"
                  style={{ color: "#007bff" }}
                >
                  https://plixon.in/contact/
                </a>
              </li>
              <li>By phone number: 77790 96777</li>
            </ul>
          </section>
        </div>

        {/* <div
          className="privacy-footer"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <Link href="/" style={{ color: "#007bff", textDecoration: "none" }}>
            Return to Home
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
