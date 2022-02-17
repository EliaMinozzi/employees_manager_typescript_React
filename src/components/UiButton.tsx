import React from "react";

interface Props{
    label:string,
    onClick:(obj?:any)=>(any),
}

const UiButton:React.FC<Props>=({label,onClick})=>{
    return(
           <div className="button_container" onClick={(obj)=>onClick(obj)}>{label}</div> 
    )
}

export default UiButton;