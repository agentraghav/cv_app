import React,{useState} from 'react'
import Name from '../components/Name'
import '../styles/name.css'
import NameSet from '../components/NameSet'
function Struct() {
    const [nameEdit,setNameEdit]=useState(false)
    const [infoEdit,setInfoEdit] = useState(false)
    const editName=()=>{
        setNameEdit(!nameEdit)
    }
    const editInfo=()=>{
        setInfoEdit(!infoEdit)
    }
    return (
        <div>
            <div className="name_text1">Hi there! I am</div>
            <div>
             {nameEdit ? (<Name done={editName} />) : (<NameSet done={editName} /> )}  <i class="fas fa-edit" onClick={editName}/>
            </div>
            <div>
                {infoEdit ? () : ()} <i class="fas fa-edit" onClick={editInfo}/>
            </div>
        </div>
    )
}

export default Struct
