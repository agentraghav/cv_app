import React, { useState } from 'react';
import '../styles/contact.css';
function ContactSet(props) {
  const [phone, setPhone] = useState(
    window.localStorage.getItem('phone') || ''
  );
  const [email, setEmail] = useState(
    window.localStorage.getItem('email') || ''
  );
  const [linkedIn, setLinkedIn] = useState(
    window.localStorage.getItem('linkedIn') || ''
  );
  const [address, setAddress] = useState(
    window.localStorage.getItem('address') || ''
  );
  return (
    <div className='contact-style'>
      <div className='contact1'>
        <span className='mid'>Phone : </span> {phone}
      </div>
      <div className='contact1'>
        <span className='mid'>Email : </span>
        {email}
      </div>
      <div className='contact1'>
        <span className='mid'>LinkedIn : </span> {linkedIn}
      </div>
      <div className='contact1'>
        <span className='mid'>Address : </span>
        {address}
      </div>
    </div>
  );
}

export default ContactSet;
