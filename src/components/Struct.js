import React,{useState} from 'react'
import Name from '../components/Name'
import InfoInput from '../components/InfoInput'
import InfoSet from '../components/InfoSet'
import NameSet from '../components/NameSet'
import EduInput from '../components/EduInput'
import EduSet from '../components/EduSet'
import ExpInput from '../components/ExpInput'
import ExpSet from '../components/ExpSet'
import SkillInput from '../components/SkillInput'
import SkillSet from '../components/SkillSet'
import '../styles/name.css'
function Struct() {
    const [nameEdit,setNameEdit]=useState(false)
    const [infoEdit,setInfoEdit] = useState(false)
    const [eduEdit,setEduEdit]=useState(false)
    const [expEdit,setExpEdit]=useState(false)
    const [skillEdit,setSkillEdit]=useState(false)
    const editName=()=>{
        setNameEdit(!nameEdit)
    }
    const editInfo=()=>{
        setInfoEdit(!infoEdit)
    }
    const editEdu=()=>{
        setEduEdit(!eduEdit)
    }

    const editExp=()=>{
        setExpEdit(!expEdit)
    }

    const editSkill=()=>{
        setSkillEdit(!skillEdit)
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
            <div className="gap">
            <div><h1 className="heading">EDUCATION</h1></div>
            <div>
                {eduEdit ? (<EduInput done={editEdu}/>) : (<EduSet done={editEdu}/>)}<i class="fas fa-edit" onClick={editEdu}/>
            </div>
            </div>
            <div className="gap">
                    <div><h1 className="heading">EXPERIENCE</h1></div>
                    <div>
                        {expEdit ? (<ExpInput done={editExp} />) : (<ExpSet done={editExp}/>)}<i class="fas fa-edit" onClick={editExp}/>
                    </div>
            </div>
            <div className="gap">
                    <div><h1 className="heading">SKILLS</h1></div>
                    <div>
                        {skillEdit ? (<SkillInput done={editSkill} />) : (<SkillSet done={editSkill}/>)}
                        <div>
                        <i class="fas fa-edit" onClick={editSkill}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Struct
