import React from 'react'
import { useState } from 'react'
import "../style.css"

const Toggle = () => {

    const[textColor, setTextColor]= useState("#1b1b1b")
    const[backgroundColor,setBackgroundColor]=useState("white")


    const handleclick=()=>{
        setBackgroundColor(backgroundColor==="white"?"#1b1b1b":"white")
        setTextColor(textColor=="#1b1b1b"?"#ffa31a":"#1b1b1b")
        
    }

  return (
    <section style={{backgroundColor, color: textColor}}>
        <button className='btn' onClick={handleclick} style={{backgroundColor , color: textColor, border:`2px solid ${textColor}`}}>
            {backgroundColor=="#1b1b1b"?"Dark Theme":"Light Theme"}
        </button>

        <section className="content">
            <h1>
                Use The Button To Change Theme
            </h1>
        </section>
      
    </section>
  )
}

export default Toggle



