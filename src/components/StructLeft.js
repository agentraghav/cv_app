import React,{useState} from 'react'
import ContactInput from '../components/ContactInput'
import ContactSet from '../components/ContactSet'
function StructLeft() {
    const [contact,setContact]=useState(false)
    const editContact=()=>{
        setContact(!contact)
    }
    return (
        <div>
            {contact ? (<ContactInput done={editContact}/>) : (<ContactSet done={editContact}/>) } <i class="fas fa-edit" onClick={editContact}/>
        </div>
    )
}

export default StructLeft
