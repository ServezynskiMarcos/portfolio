import React from "react";
import s from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("mpznqblo");

  return (
    <div className={s.container} id="contact">
      <form onSubmit={handleSubmit}>
        <h2 htmlFor="email">Contact Me</h2>
        <label>Your email</label>
        <input id="email" type="email" name="email" placeholder="example@gmail.com"/>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Leave me a message</label>   
        <input id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      {state.succeeded ? <p>¡Thanks for your interest!</p> : null}
      </form>
    </div>
  );
}
export default Contact;
