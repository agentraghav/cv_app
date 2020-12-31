import React,{useState,useEffect} from 'react'

export default function ExpInput(props) {
    const [position,setPosition] =useState('')
    const [company,setCompany]=useState('')
    const [startYear,setStartYear]=useState('')
    const [endYear,setEndYear]=useState('')
    const [startMonth,setStartMonth]=useState('')
    const [endMonth,setEndMonth]=useState('')
    const [desc,setDesc]=useState('')
    let [exp,setExp]=useState(JSON.parse(window.localStorage.getItem('exp'))|| [] )

    const handleCompany=(e)=>{
        setCompany(e.target.value)
    }

    const handlePosition=(e)=>{
        setPosition(e.target.value)
    }

    const handleStartYear=(e)=>{
        setStartYear(e.target.value)
    }

    const handleStartMonth=(e)=>{
        setStartMonth(e.target.value)
    }

    const handleEndYear=(e)=>{
        setEndYear(e.target.value)
    }

    const handleEndMonth=(e)=>{
        setEndMonth(e.target.value)
    }

    const handleDesc=(e)=>{
        setDesc(e.target.value)
    }

    const addChange=(e)=>{
        const obj={id:'',company:company,position:position,startYear:startYear,startMonth:startMonth,endYear:endYear,endMonth:endMonth,desc:desc}
        exp=exp.map((job,index)=>{
                return {...job,id:index}
        })
        exp.push({...obj,id:exp.length})
        window.localStorage.setItem('exp',JSON.stringify(exp))
        props.done()
    }

    useEffect(()=>{
        setExp(exp)
        window.localStorage.setItem('exp',JSON.stringify(exp))
    },[exp])

    return (
        <div>
            <form onSubmit={addChange}>
                <label>
                    Company :- 
                </label>
                <input type="text" value={company} onChange={handleCompany}/>
                <br/>

                <label>
                    Position :- 
                </label>
                <input type="text" value={position} onChange={handlePosition}/>
                <br/>

                <label>
                    Start Year :- 
                </label>
                <input type="text" value={startYear} onChange={handleStartYear}/>
                <br/>

                <label>
                    Start Month :- 
                </label>
                <input type="text" value={startMonth} onChange={handleStartMonth}/>
                <br/>

                <label>
                    End Year :- 
                </label>
                <input type="text" value={endYear} onChange={handleEndYear}/>
                <br/>

                <label>
                    End Month :- 
                </label>
                <input type="text" value={endMonth} onChange={handleEndMonth}/>
                <br/>
                <label>
                    Job Description :- 
                </label>
                <textarea rows="6" cols="70" type="text" value={desc} onChange={handleDesc}/>
                <br/>
                <button>Submit</button>
                <button onClick={props.done}>Cancel</button>
            </form>
        </div>
    )
}
