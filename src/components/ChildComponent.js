import React from 'react'

function ChildComponent(props){

  const style={
    marginTop:"15px",
    border:"2px solid black",
    color:"red",
    fontSize:"20px"
  }

    return (
      <div>
        
        <button style={style} onClick={()=>props.greetHandler("gogos")}>Greetings!!</button>
        <h2> {props.messageHandler}</h2>
      </div>
    )
  
}

export default ChildComponent