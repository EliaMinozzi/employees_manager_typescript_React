import React from "react";
import UiTitle from "../components/UiTitle";
import { useAppSelector } from '../redux/Duck';
import { useState,useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import UiButton from "../components/UiButton";

import './styles.css';

interface setData{
    companyName:string,
        companyId: string,
        employees:setEmployees[]
}

interface setEmployees{
    name:string,
    surname:string,
    idEmployee:string,
    transfert: number,
}

interface DataState {
  data: setData[]
}

const PageFirst:React.FC =()=>{
    const [data,setData]=useState<DataState>(useAppSelector(state=>state.data))
    const [Firstdata,setFirstData]=useState<DataState>(useAppSelector(state=>state.data))
    const [modalMessage,setMessage]=useState<string>('')

    const changeEmployee=(infoEmployee:setEmployees)=>{
        if(infoEmployee.transfert<10){
            let id=infoEmployee.idEmployee
        let data1=[...data.data[0].employees]
        let data2=[...data.data[1].employees]
        let newData1;
        let newData2;
        let filter1=data1.filter(element=>element.idEmployee===id)
        let filter2=data2.filter(element=>element.idEmployee===id)
        let index1=0
        let index2=0
        if(filter1.length!==0){
            index1=data1.findIndex(element=>element.idEmployee===id)
            data1.splice(index1,1)
            newData1={
                companyName:data.data[0].companyName,
                companyId: data.data[0].companyId,
                employees:data1
            }
            let newFilter={...filter1[0]}
            newFilter.transfert=newFilter.transfert+1
            data2.push(newFilter)
            newData2={
                companyName:data.data[1].companyName,
                companyId: data.data[1].companyId,
                employees:data2
            }
        }else{
            index2=data2.findIndex(element=>element.idEmployee===id)
            data2.splice(index2,1)
            newData2={
                companyName:data.data[1].companyName,
                companyId: data.data[1].companyId,
                employees:data2
            }
            let newFilter={...filter2[0]}
            newFilter.transfert=newFilter.transfert+1
            data1.push(newFilter)
            newData1={
                companyName:data.data[0].companyName,
                companyId: data.data[0].companyId,
                employees:data1
            }
        }
        let localData={data:[newData1,newData2]}
        setData(localData)
        }
    }

    const onSave=()=>{
        setFirstData(data)
        setMessage('Dati salvati corretamente!')
    }

    const onCancel=()=>{
        setData(Firstdata)
        setMessage('Modifiche annullate correttamente!')
    }

    useEffect(()=>{const time=setTimeout(()=>setMessage(''),5000)},[modalMessage])

    return(
        <div className='app_container'>
            <UiTitle title='Gestione del personale aziendale'/>
            <div className="companies_container">
                {data.data.map((company,index)=>(
                    <CompanyCard key={index} info={company} onChangeCompany={(infoEmployee)=>changeEmployee(infoEmployee)}/>
                ))}
            </div>
            <div className='buttons_container'>
                <UiButton label='Salva' onClick={()=>onSave()}/>
                <UiButton label='Annulla' onClick={()=>onCancel()}/> 
            </div>
            {modalMessage!=='' &&
                <div className="message">{modalMessage}</div>
            }            
        </div>
    )
}

export default PageFirst;

