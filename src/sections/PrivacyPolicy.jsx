import React from "react";
import { motion } from "framer-motion";
import "../styles/sections/Terms.scss";
import { reveal } from "../utils/Animations";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import "../styles/sections/PrivacyPolicy.scss";

function PrivacyPolicy() {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="Privacy-container" id="about" ref={element}>
        <div className="container">
          <div>
            <Title title=" PRIVACY POLICY" color="blue" />
            <p>
              By registering at EFLEET BY MEME BIKE you agree to the following
              terms and conditions:
            </p>
            <p>
              {" "}
              1. At EFLEET BY MEME BIKE, we value your trust & respect your
              privacy. This Privacy Policy provides you with details about the
              way your data is collected, stored & used by us. You are advised
              to read this Privacy Policy carefully. By downloading and using
              the EFLEET BY MEME BIKE application you expressly give us consent
              to use & disclose your personal information in accordance with
              this Privacy Policy. If you do not agree to the terms of the
              policy, please do not use or access EFLEET BY MEME BIKE. Note: Our
              privacy policy may change at any time without prior notification.
              To make sure that you are aware of any changes, kindly review the
              policy periodically.
            </p>
            <p>
              {" "}
              2. We will not sell, share, or rent your personal information and
              uploaded documents for verification to any 3rd party or use your
              email address/mobile number for unsolicited emails and/or SMS. Any
              emails and/or SMS sent by EFLEET BY MEME BIKE will only be in
              connection with the provision of agreed services & products and
              this Privacy Policy. We reserve the right to communicate your
              personal information to any third party that makes a legally
              compliant request for its disclosure.
            </p>
            <p>
              {" "}
              3. You will keep your username and password safe and won’t share
              them with anyone. You will not pass yourself off as someone else
              or create multiple, false accounts.
            </p>
            <p>
              {" "}
              4. We are using email IDs and mobile numbers to validate user. In
              case a user wants to try the service, we are taking personal
              identification information in the form of Driving license / Govt.
              Id. The data is associated with the email ID and Mobile number
              provided.
            </p>
            <p>
              {" "}
              5. Via Googles SDK, we are maintaining crash logs if an
              application crash. We are asking for user location to locate
              pickup points near user, but we are not storing the location.
            </p>
            <p>
              {" "}
              6. We are not storing any payment Data. Payment Handling is done
              by a third-party vendor.{" "}
            </p>
            <p>
              7. From after you have booked your vehicle and received the
              vehicle till you return the vehicle to EFLEET BY MEME BIKE in the
              same condition as it was given, all lawful responsibilities of the
              Government of India regarding the vehicle booked and used by you
              for the booking time Period lies with you.
            </p>
            <p>
              {" "}
              8. You can update your personal details by accessing your account
              Profile page and making any necessary changes; this will update
              your details across all services that you have or will use at
              EFLEET BY MEME BIKE.
            </p>
            <p>
              {" "}
              9. EFLEET BY MEME BIKE seeks to ensure that your information and
              preferences are accurate and complete and ensure that we don’t
              hold personal information any longer than is necessary. If you
              wish to view or change your information, where possible you may do
              this online. Alternatively, by sending an email with your name,
              full mailing address, email address, and relevant information
              about subscriptions and registrations you have with us to the
              customer support team at team Email.
            </p>
            <p>
              {" "}
              10. Our primary goal in collecting information is to provide
              customers with a better service and to provide all visitors a
              smooth, efficient, and personalised experience while using our
              website. If you contact us, we may keep a record of your
              correspondence or comments. We use this information to help us
              provide better service if you contact us again.
            </p>
            <p>
              {" "}
              11. These terms and/or your use of the website shall be governed
              by and construed in accordance with Indian law and the Indian
              Courts shall have exclusive jurisdiction over any dispute which
              may arise.
            </p>
            <p>
              {" "}
              12. EFLEET BY MEME BIKE acknowledges your trust and is committed
              to protecting the information you provide. To prevent unauthorised
              access, maintain accuracy, and ensure proper use of information,
              we employ physical, electronic, and managerial processes to
              safeguard and secure the information we collect online. Our site
              has security measures in place to protect against the loss, misuse
              and alteration of the information under our control.
            </p>
            <p>
              {" "}
              13. If you breach these or any of our other terms and conditions,
              we reserve the right to close your account, if we do so, we may
              close all accounts you have open in your name.
            </p>
            <Title title="FEE POLICY " color="blue" />
            <p>
              {" "}
              1. The two-wheeler needs to be returned at the specified Date and
              Time as mentioned on the mobile app while booking. A delay of more
              than 15 minutes without intimating the customer care or Field
              executive will attract penalty as per TnC.
            </p>
            <p>
              {" "}
              2. A Trip extension request is to be made on the mobile app as per
              availability.
            </p>
            <p>
              {" "}
              3. The customer is not authorized to lend the two-wheeler to any
              person without first informing MEME WORLDWIDE INDIA PRIVATE
              LIMITED. In such cases we will need to verify the documents of the
              additional rider before starting the trip.
            </p>
            <p>
              {" "}
              4. In case of minor damages to the helmet, the customer is liable
              to pay fine.
            </p>
            <p>
              {" "}
              5. In case of damage to the two-wheeler on rent due to accident/
              mishandling/ carelessness, appropriate charges will be calculated
              by MEME WORLDWIDE INDIA PRIVATE LIMITED and the customer is liable
              to pay the same to MEME WORLDWIDE INDIA PRIVATE LIMITED along with
              the daily tariff until the bike is ready for renting again.
            </p>
            <p>
              6. In case of theft, the customer is liable to pay, in full, the
              market rate of the two-wheeler.
            </p>
            <p>
              {" "}
              7. In case of vehicle fault or failure, the customer needs to
              contact the vendor or Field Executive before getting any repairs
              done. The original printed invoice is mandatory to claim
              reimbursement for the same.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
