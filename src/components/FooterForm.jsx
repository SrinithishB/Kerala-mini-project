import { useRef, useState } from 'react'
import style from './nav.module.css'
import axios from 'axios'
const FooterForm=()=>{
    let name=useRef()
let email=useRef()
let feedback=useRef()
let submit=(x)=>{
    x.preventDefault()
    let o={
        "name":name.current.value,
        "email":email.current.value,
        "feedback":feedback.current.value
    }
    console.log(o);
    axios.post("https://tourtokerala.netlify.app/feedback",o)
    .then(()=>{
        console.log("Success");
        name.current.value=""
        email.current.value=""
        feedback.current.value=""
    })
    .catch(()=>{
        console.log("Error");
    })
    
}
    return(
        <div className={style.footerForm}>
            <form>
                <div>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input type="text" name='name'placeholder='Name' ref={name}/>
                </div>
                <div>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" name='email' placeholder='Email' ref={email}/>
                </div>
                <div>
                    {/* <label htmlFor="feedback">Feedback</label> */}
                    <textarea name="feedback" placeholder='Feedback' ref={feedback}></textarea>
                </div>
                <div>
                    <input type="submit" onClick={submit}/>
                </div>                
            </form>
        </div>
    )
}
export default FooterForm
