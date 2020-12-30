import React,{useState} from 'react'
import '../styles/info.css'
function InfoSet() {
    const [info,setInfo]=useState(window.localStorage.getItem('info') || '')
    
    return (
        <div>
            <p>{info}</p>
        </div>
    )
}

export default InfoSet
