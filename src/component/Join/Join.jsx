import './Join.css'
import React, { useRef } from 'react'
import { use } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_acrp15b', 'template_f0x9nz9', form.current, {
        publicKey: 'ZCVgk9nRcAIhbu0HM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
        </div>
      </div>

      <div className="right-j">
        

        <form className="email-container" onSubmit={sendEmail} ref={form}>
          <input type="email" name="user_email" placeholder="Enter your email address" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
