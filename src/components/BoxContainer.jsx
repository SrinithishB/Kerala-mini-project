import style from './nav.module.css'
import axios from 'axios'
import Box from './Box'
import { useEffect, useState } from 'react'
const BoxContainer=(x)=>{
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/${x.db}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch(()=>{
            console.log("Error")
        })
    },[])
    
    return (
        <div className={style.boxContainerParent}>
             <center><h2 className={style.logo}>Places</h2></center>
        <div className={style.boxContainer}>
           {data.map((d)=>{
                return(
                    <Box data={d} key={d.id}></Box>
                )
           })}
        </div>
        </div>
    )
}
export default BoxContainer