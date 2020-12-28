import React from 'react';
import ProfileImage from './components/ProfileImage';
import './styles/styles.css'
function App() {
  return (
    <div>
      <div className="col-md-4" style={{backgroundColor:"#54a0ff"}}>
          <ProfileImage />
      </div>
      <div className="col-md-6">
          <h1>Information is Added here</h1>
      </div>
    </div>
  )
}

export default App
