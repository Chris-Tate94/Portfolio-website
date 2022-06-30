import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>Chris_tate_94@hotmail.com</h5>
            <a href='mailto:chris_tate_94@hotmail.com'>Email Me</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Chris Tate</h5>
            <a href='https://m.me/chris.tate.925'>Message Me</a>
          </article>
          <article className='contact__option'>
            <BsTelephone />
            <h4>Call</h4>
            <h5>+1(647)970-3677</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact