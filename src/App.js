import React from 'react';
import ProfileImage from './components/ProfileImage';
import './styles/styles.css'
import './components/Struct'
import Struct from './components/Struct';
import StructLeft from './components/StructLeft';
function App() {
  return (
    <div>
      <div className="col-md-4 stick" style={{backgroundColor:"#54a0ff"}}>
          <ProfileImage />
          <div>
            <StructLeft />
          </div>
      </div>
      <div className="col-md-6 div-height">
          <Struct />
      </div>
    </div>
  )
}

export default App
