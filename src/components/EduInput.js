import React,{useState,useEffect} from 'react'
function EduInput(props) {
    const [school,setSchool]=useState('')
    const [year,setYear]=useState('')
    const [grade,setGrade]=useState('')
    const [courseName,setCourseName]=useState('')
    let [edu,setEdu] = useState(JSON.parse(window.localStorage.getItem('educ'))|| [])
    
    const addChange=(e)=>{
        const obj={id:'',school:school,year:year,grade:grade,courseName:courseName}
        console.log(obj)
        edu = edu.map((job, index) => {
            return { ...job, id: index }
        })
        
        edu.push({ ...obj, id: edu.length })
        console.log(edu)
        window.localStorage.setItem('educ',JSON.stringify(edu))
        console.log(window.localStorage.getItem('educ'))
        props.done()
    }

    const handleSchool=(e)=>{
        setSchool(e.target.value)
    }
    const handleYear=(e)=>{
        setYear(e.target.value)
    }
    const handleGrade=(e)=>{
        setGrade(e.target.value)
    }
    const handleCourseName=(e)=>{
        setCourseName(e.target.value)
    }

    

    useEffect(()=>{
        setEdu(edu)
        window.localStorage.setItem('educ',JSON.stringify(edu))
    },[edu])
    
    return (
        <div>
            <form onSubmit={addChange}>
                <label>
                    School/University Name :- 
                </label>
                <input type="text" value={school} onChange={handleSchool}/>
                <br/>
                <label>
                    Course Name :- 
                </label>
                <input type="text" value={courseName} onChange={handleCourseName}/>
                <br/>
                <label>
                    Year :- 
                </label>
                <input type="text" value={year} onChange={handleYear}/>
                <br/>
                <label>
                    Grade :- 
                </label>
                <input type="text" value={grade} onChange={handleGrade}/>
                <br/>
                <button>Submit</button>
                <button onClick={props.done}>Cancel</button>
            </form>
        </div>
    )
}

export default EduInput
