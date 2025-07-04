import { useRef } from "react";
import ReactGA from "react-ga";

import emailjs from "@emailjs/browser";
import "./index.scss";

const eventTrack = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};


if (
  process.env.REACT_APP_GA_TRACKING_ID &&
  !ReactGA.ga &&
  typeof window !== "undefined"
) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
}

function showResponse(message, className) {
  const response = document.querySelector(".response-message");
  response.classList.add("show");
  response.classList.add(className);
  response.querySelector("p").textContent = message;
}

const Form = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    showResponse("Sending Message...");

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_KEY}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        refForm.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        () => {
          console.log("Success");
          showResponse(
            "Your message has been successfully sent! Thank you.",
            "success"
          );
          setTimeout(() => window.location.reload(), 1500);
        },
        () => {
          console.log("Error");
          showResponse(
            "Failed to send the message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={refForm} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input type="text" name="name" required />
            <span className="input-span"></span>
            <label>Name</label>
          </li>
          <li>
            <input type="email" name="email" required />
            <span className="input-span"></span>
            <label>Email</label>
          </li>
          <li>
            <input type="text" name="title" required />
            <span className="input-span"></span>
            <label>Subject</label>
          </li>
          <li className="textarea">
            <textarea name="message" required></textarea>
            <span className="input-span"></span>
            <label>Your Message</label>
          </li>
          <li className="submit-button">
            <input
              type="submit"
              onClick={eventTrack.bind(
                this,
                "Contact Us",
                "Contact Us Button",
                "Button Event"
              )}
              className="flat-button"
              value="Send Message!"
            />
            <span className="bg"></span>
            <span className="base"></span>
          </li>
          <li className="response-message">
            <p>Your message has been successfully sent! Thank you.</p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
