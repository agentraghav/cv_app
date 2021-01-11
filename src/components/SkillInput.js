import React, { useState, useEffect } from 'react';

function SkillInput(props) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  let [skill, setSkill] = useState(
    JSON.parse(window.localStorage.getItem('skill')) || []
  );

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const addChange = (e) => {
    const obj = { id: '', name: name, rating: rating };
    skill = skill.map((rat, index) => {
      return { ...rat, id: index };
    });
    skill.push({ ...obj, id: skill.length });
    window.localStorage.setItem('skill', JSON.stringify(skill));
    props.done();
  };

  useEffect(() => {
    setSkill(skill);
    window.localStorage.setItem('skill', JSON.stringify(skill));
  }, [skill]);

  return (
    <div>
      <form onSubmit={addChange}>
        <label>Skill-Name :- </label>
        <input type='text' value={name} onChange={handleName} />
        <br />
        <label>Rating :- </label>
        <input
          type='number'
          min={1}
          max={5}
          value={rating}
          onChange={handleRating}
        />
        <br />
        <button>Submit</button>
        <button onClick={props.done}>Cancel</button>
      </form>
    </div>
  );
}

export default SkillInput;
