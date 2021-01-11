import React, { useState, useEffect } from 'react';

function ContactInput(props) {
  const [phone, setPhone] = useState(
    window.localStorage.getItem('phone') || ''
  );
  const [linkedIn, setLinkedIn] = useState(
    window.localStorage.getItem('linkedIn') || ''
  );
  const [address, setAddress] = useState(
    window.localStorage.getItem('address') || ''
  );
  const [email, setEmail] = useState(
    window.localStorage.getItem('email') || ''
  );

  const handleChange = (e) => {
    props.done();
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleLinkedIn = (e) => {
    setLinkedIn(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('phone', phone.trim());
    window.localStorage.setItem('linkedIn', linkedIn.trim());
    window.localStorage.setItem('address', address.trim());
    window.localStorage.setItem('email', email.trim());
  }, [phone, linkedIn, address, email]);

  return (
    <div>
      <form onSubmit={handleChange}>
        <label>Phone :</label>
        <input
          type='text'
          value={phone}
          placeholder='Phone Number'
          onChange={handlePhone}
        />
        <br />
        <label>LinkedIn :</label>
        <input
          type='text'
          value={linkedIn}
          placeholder='LinkedIn'
          onChange={handleLinkedIn}
        />
        <br />
        <label>Email :</label>
        <input
          type='text'
          value={email}
          placeholder='Email'
          onChange={handleEmail}
        />
        <br />
        <label>Address :</label>
        <input
          type='text'
          value={address}
          placeholder='Address'
          onChange={handleAddress}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactInput;
