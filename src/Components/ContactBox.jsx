import "./ContactBoxStyle.css";

import React from 'react'

const ContactBox = () => {
  return (
    <div className="box">
            <label for = "1">Name</label>
            <input id="1" placeholder="Name"/>
            <label for = "2">Email</label>
            <input id="2" type='email' placeholder="Email"/>
            <label for ="3">Message</label>
            <textarea id="3" placeholder="Message" rows="5" cols="45"></textarea>
            <button>send Message</button>
    </div>
  )
}

export default ContactBox