import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Reviews from "./Reviews";
import style from './nav.module.css'
const Place=()=>{
    let obj=useParams();
    let [data,setData]=useState([])
    // let [fea,setFea]=useState([])
    useEffect(()=>{
        axios.get(`https://kerala-json-api.onrender.com/touristspot/${obj.x}`)
        .then((res)=>{
            setData(res.data)
            // setFea(data.keyfeatures.splice(',',data.keyfeatures.length));
        }).catch(()=>{
            console.log("error");
        })
    },[])
    return(
        <div className={style.content}>
        <div className={style.place}>
            <h1>{data.sname}</h1>
            <img src={data.image} alt="Not Found" srcSet="" />
            <p>{data.description}</p>
            <p>{data.keyfeatures}</p>
            {/* <ul>
            {
                fea.map((x)=>{
                    return(
                        <li>{x}</li>
                    )  
                })
            }
            </ul> */}
        </div>
        <Reviews id={obj.x}></Reviews>
        
        </div>
    )
}
export default Place
