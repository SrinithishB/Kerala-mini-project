import { useEffect, useRef, useState } from 'react'
import style from './nav.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ReviewList=(x)=>{
    let navigate=useNavigate("http://localhost:3001")
    let [data,setData]=useState([])
    let form=useRef()
    let [password,setPassword]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:3000/reviews")
        .then((response)=>{
            setData(response.data)
        })
        .catch(()=>{
            console.log("Error.....");
        })
    },[])
    let typePassword=(x)=>{
        setPassword(x.target.value)
    }
    let edit=(id)=>{
        navigate(`/editreview/${id}`)
    }
    let del=()=>{
        form.current.style.visibility='visible'
    }
    let confirmDelete=(id,pass)=>{
        if(pass==password){
            axios.delete(`http://localhost:3000/reviews/${id}`)
            .then(()=>{
                console.log("Success");
            })
            .catch(()=>{
                console.log("Error....");
            })
        }
    }
    return(
        <div className={style.reviewList}>
            {
                data.filter(i=>x.id==i.placeId).map((d)=>{
                    console.log(d);
                    return(
                        <div className={style.reviewBox}>
                            <p>
                                <b>Name:</b> {d.name}<br />
                                <b>Email:</b> {d.email}<br/>
                                <b>Rating:</b> {d.rating}<i class="fa-regular fa-star"></i><br/>
                                <b>About:</b> {d.about}<br/> 
                            </p>
                            <div>
                            <button onClick={()=>edit(d.id)}>Edit</button>
                            <button onClick={del}>Delete</button>
                            </div>
                            <form style={{visibility:'hidden'}} ref={form} id={style.passForm}>
                                <div>
                                    <input type="password" placeholder='Password' name='pass' onChange={typePassword}/>
                                </div>
                                <div>
                                    <input type="submit" onClick={confirmDelete(d.id,d.password)}/>
                                </div>
                            </form>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ReviewList