import React from "react";
import EmployeeCard from './EmployeeCard';
import './styles.css';

interface CompanyProps{
        info:{
            companyName:string,
            companyId: string,
            employees:setEmployees[]
        }
        onChangeCompany:(infoEmployee:setEmployees)=>any
}

interface setEmployees{
    name:string,
    surname:string,
    idEmployee:string,
    transfert: number,
}

const CompanyCard:React.FC<CompanyProps>=({info,onChangeCompany})=>{
    return(
        <div className="company_card_container">
            <div className="companyName">{info.companyName}</div>
            <div className="employees_container">
                {
                    info.employees.map((employee,index)=>(
                        <EmployeeCard key={index} info={employee} onChange={(employee)=>onChangeCompany(employee)}/> 
                    ))
                }
            </div>
        </div>
    )
}
export default CompanyCard;