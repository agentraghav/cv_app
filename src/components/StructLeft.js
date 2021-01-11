import React, { useState } from 'react';
import ContactInput from '../components/ContactInput';
import ContactSet from '../components/ContactSet';
import '../styles/editBut.css';
function StructLeft() {
  const [contact, setContact] = useState(false);
  const editContact = () => {
    setContact(!contact);
  };
  return (
    <div>
      {contact ? (
        <ContactInput done={editContact} />
      ) : (
        <ContactSet done={editContact} />
      )}
      <button
        className='e-button'
        style={{ marginTop: '10px' }}
        onClick={editContact}>
        <i class='fas fa-edit' /> Edit
      </button>
    </div>
  );
}

export default StructLeft;
