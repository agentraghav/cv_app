import React,{useState} from 'react'
import '../styles/name.css'
function NameSet(props) {
    const [firstName,setFirstName]=useState(window.localStorage.getItem('firstName') || '')
    const [lastName,setLastName]=useState(window.localStorage.getItem('lastName') || '')
    return (
        <div>
            <div className="name_text"> 
            
                {firstName}
            <span className="last_name">
                {lastName}
            </span>
            </div>
        </div>
    )
}

export default NameSet
