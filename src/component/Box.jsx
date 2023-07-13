import React from "react";
 const Box=(props)=>{
    return(
        <>
            <div className="box" onClick={()=>{props.onclick(props.id)}}>
                <h1>{props.value}</h1>
            </div>
        </>
    )
 }
 export default Box;