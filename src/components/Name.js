import React, { useState, useEffect } from 'react';

function Name(props) {
  const [firstName, setFirstName] = useState(
    window.localStorage.getItem('firstName') || ''
  );
  const [lastName, setLastName] = useState(
    window.localStorage.getItem('lastName') || ''
  );

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function changeName(e) {
    if (!firstName.trim() || !lastName.trim()) {
      props.done();
      e.preventDefault();
      return;
    }
    props.done();
  }

  useEffect(() => {
    window.localStorage.setItem('firstName', firstName);
    window.localStorage.setItem('lastName', lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <form onSubmit={changeName}>
        <input type='text' value={firstName} onChange={handleFirstName} />
        <input type='text' value={lastName} onChange={handleLastName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Name;
