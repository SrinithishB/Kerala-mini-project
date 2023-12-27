import { useNavigate, useParams } from 'react-router-dom'
import style from './nav.module.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const EditReview=()=>{
    let navigate=useNavigate("https://tourtokerala.netlify.app")
    let id=useParams()
    let name=useRef()
    let email=useRef()
    let pass=useRef()
    let rating=useRef()
    let about=useRef()
    let ermsg=useRef()
    let [placeId,setPlaceID]=useState(0)
    let [passState,setPassState]=useState('')
    useEffect(()=>{
        axios.get(`https://tourtokerala.netlify.app/reviews/${id.x}`)
        .then((res)=>{
            console.log(res.data);
            name.current.value=res.data.name
            email.current.value=res.data.email
            // pass.current.value=res.data.pass
            setPassState(res.data.password)
            rating.current.value=res.data.rating
            about.current.value=res.data.about
            setPlaceID(res.data.placeId)
        })
        .catch(()=>{
            console.log("Error");
        })
    },[])
    let editRev=(y)=>{
        y.preventDefault()
        if (rating.current.value>5){
            rating.current.value=5
        }
        if (passState==pass.current.value){
            let o={
                "name":name.current.value,
                "email":email.current.value,
                "password":pass.current.value,
                "rating":rating.current.value,
                "about":about.current.value,
                "placeId":placeId
            }
            axios.put(`http://localhost:3000/reviews/${id.x}`,o)
            .then(()=>{
                console.log("Review Edited");
                navigate(`/place/${id.x}`)
                
            })
            .catch(()=>{
                console.log("Error.....");
            })
        }
        else{
            ermsg.current.style.visibility="visible";
            console.log(pass.current.value,passState);
        }

    }
    return(
        <div className={style.editReview}>
            <form>
                <div>
                    <h2>Edit Review</h2>
                </div>
                <div>
                    <input type="text" name='name' placeholder='Name' ref={name} />
                </div>
                <div>
                    <input type="email" name='email' placeholder='Email' ref={email}/>
                </div>
                <div>
                    <input type="password" name='password' placeholder='Password' ref={pass}/><br />    
                    <label htmlFor="" ref={ermsg} style={{visibility:"hidden"}}>Invalid Password</label>
                </div>
                <div>
                    <input type="number" name='rating' placeholder='Ratings out of 5' ref={rating}/>
                </div>
                <div>
                    <textarea type="text" name='about' placeholder='About...' ref={about}/>
                </div>
                <div>
                    <input type="submit" onClick={editRev}/>
                </div>
            </form>
        </div>
    )
}
export default EditReview
