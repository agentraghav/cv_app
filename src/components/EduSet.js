import React, { useState, useEffect } from 'react';
import '../styles/educ.css';

export default function EduSet(props) {
  const [edu, setEdu] = useState(
    JSON.parse(window.localStorage.getItem('educ')) || []
  );

  const delEdu = (e) => {
    edu.splice(Number(e.target.id), 1);
    window.localStorage.setItem('educ', JSON.stringify(edu));
    window.location.reload(false);
  };

  return (
    <div>
      {edu.map((study, index) => (
        <div className='content-box' key={index}>
          <div>
            <span
              id={index}
              className='fa fa-trash info-del'
              onClick={delEdu}
            />
          </div>
          <div className='col-md-6'>
            <h4 className='title'>
              <label>School/University Name : </label>
              {study.school}
            </h4>
          </div>
          <div className='col-md-6'>
            <p className='data'>
              <label className='lab'>Year : </label>
              {study.year}
            </p>
          </div>
          <div>
            <p className='data'>
              <span className='lab'>Course : </span>
              {study.courseName}
            </p>
          </div>
          <div>
            <p className='data'>
              <span className='lab'>CGPA : </span>
              {study.grade}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
