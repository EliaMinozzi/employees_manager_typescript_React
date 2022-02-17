import React from "react";
import UiButton from './UiButton';
import './styles.css';
import Profile from '../assets/profile.png';
import { useState,useEffect } from "react";

interface EmployeeProps{
    info:{
        name:string,
        surname:string,
        idEmployee:string,
        transfert: number,
    }
    onChange:(employeeInfo:setEmployees)=>setEmployees
}

interface setEmployees{
    name:string,
    surname:string,
    idEmployee:string,
    transfert: number,
}

const EmployeeCard:React.FC<EmployeeProps>=({info,onChange})=>{
    const [errorMessage,setError]=useState<string>('')

    useEffect(()=>{const time=setTimeout(()=>setError(''),5000)},[errorMessage])

    return(
        <div className="employee_container">
            <div className="employee_set">
                <div className="employee_image"><img src={Profile} alt='Profile' width='100' height='100'/></div>
                <div className="employee_info">
                    <p className="name_container"><b>Name</b>:{info.name}</p>
                    <p className="surname_container"><b>Surname</b>:{info.surname}</p>
                    <p className="transfert_container"><b>Transfert number</b>:{info.transfert}</p>
                </div>
            </div>
            <UiButton label={'Trasferisci'} onClick={()=>{info.transfert===10 ? setError('Impossibile trasferire un dipendente più di 10 volte!'):onChange(info)}}/>
            {errorMessage!=='' &&
                <div className="errorMessage">
                    {errorMessage}
                </div>
            }
        </div>
    )
}
export default EmployeeCard;