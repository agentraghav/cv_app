import React,{useState} from 'react'
import '../styles/skill.css'
function SkillSet(props) {
    const [skill,setSkill]=useState( JSON.parse(window.localStorage.getItem('skill')) || [])


    const delSkill=(e)=> {
        skill.splice(Number(e.target.id), 1);
        window.localStorage.setItem('skill',JSON.stringify(skill))
        window.location.reload(false);

    }

    const genStars=(num)=> {
        let stars = [...Array(5).keys()]
        let stArr = stars.map((n, index) => {
            if (n < num)
                return <span key={index} className="fa fa-star fa-lg"></span>
            else
                return <span key={index} className="fa fa-star-o fa-lg"></span>
        })
        return <div>{stArr}</div>;
    }

    return (
        <div>
            {skill.map((skil, index)=>(
                    <div>
                        <div>
                        <span id={index} className="fa fa-trash info-del" onClick={delSkill}/>
                        </div>
                    <div><span className="skill-name"><h3> {skil.name}</h3></span><span className="skill-star">{genStars(skil.rating)}</span></div>
                     
                        
                    
                    </div>
            ))}
        </div>
    )
}

export default SkillSet
