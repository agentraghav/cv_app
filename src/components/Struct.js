import React,{useState} from 'react'
import Name from '../components/Name'
import InfoInput from '../components/InfoInput'
import InfoSet from '../components/InfoSet'
import NameSet from '../components/NameSet'
import '../styles/name.css'
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
            <div className="info-set">

                <div><h1 className="heading">About Me</h1></div>
                <div>
                {infoEdit ? (<InfoInput done={editInfo}/>) : (<InfoSet done={editInfo}/>)} <i class="fas fa-edit" onClick={editInfo}/>
                </div>
            </div>
        </div>
    )
}

export default Struct
