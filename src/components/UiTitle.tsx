import React from "react";

interface UiTitleProps{
     title: string,
}

//const UiTitleProps:React.FC<{title:string}> =()=>{
const UiTitle:React.FC<UiTitleProps> =({title})=>{
    return(
        <div className="title_container">
            {title}
        </div>
    )
}
export default UiTitle;