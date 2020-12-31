import React,{useState} from 'react'
import '../styles/exp.css'
function ExpSet(props) {
    const [exp,setExp]=useState(JSON.parse(window.localStorage.getItem('exp'))|| [])
    const delExp=(e)=>{
        exp.splice(Number(e.target.id),1)
        window.localStorage.setItem('exp',JSON.stringify(exp))
        window.location.reload(false);
    }
    return (
        <div>
              {exp.map((job,index)=>(
                   <div className="content-box" key={index}>
                   <div>
                       
                   <span id={index} className="fa fa-trash info-del" onClick={delExp}/>
                    </div>
                    <div className="col-md-12">
                        <h2 className="title"><label className="lab">Company :- </label>{job.company}</h2>
                        <p className="date">{job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}</p>
                    </div>
                    <div >
                        <h3 className="position"><label className="lab">Position :- </label>{job.position}</h3>
                    </div>
                    <div>
                    <p className="data-exp">{job.desc}</p>
                    </div>
                    
                </div> 
              ))}      
        </div>
    )
}

export default ExpSet
