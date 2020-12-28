import React,{useState} from 'react'
import Name from '../components/Name'
import '../styles/name.css'
import NameSet from '../components/NameSet'
function Struct() {
    const [nameEdit,setNameEdit]=useState(false)
    const editName=()=>{
        setNameEdit(!nameEdit)
    }
    return (
        <div>
            <div className="name_text">Hi there! I am</div>
            <div>
             {nameEdit ? (<Name done={editName} />) : (<NameSet done={editName} /> )}  <i class="fas fa-edit" onClick={editName}/>
            </div>
        </div>
    )
}

export default Struct
