import React, { useState, useEffect } from 'react';

function InfoInput(props) {
  const [info, setInfo] = useState(window.localStorage.getItem('info') || '');

  const handleInfo = (e) => {
    setInfo(e.target.value);
  };
  const handleChange = (e) => {
    props.done();
  };
  useEffect(() => {
    window.localStorage.setItem('info', info);
  }, [info]);
  return (
    <div>
      <form onSubmit={handleChange}>
        <textarea rows='6' cols='70' value={info} onChange={handleInfo} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default InfoInput;
