import { useRef } from 'react'
import style from './nav.module.css'
import axios from 'axios'
const ReviewsForm=(x)=>{
    // console.log(x.id);
    let name=useRef()
    let email=useRef()
    let pass=useRef()
    let rating=useRef()
    let about=useRef()
    let addRev=(y)=>{
        y.preventDefault()
        if (rating.current.value>5){
            rating.current.value=5
        }
        let o={
            "name":name.current.value,
            "email":email.current.value,
            "password":pass.current.value,
            "rating":rating.current.value,
            "about":about.current.value,
            "placeId":Number(x.id)
        }
        axios.post(`http://localhost:3000/reviews/`,o)
        .then(()=>{
            console.log("Review Added");
            name.current.value=""
            email.current.value=""
            pass.current.value=""
            rating.current.value=""
            about.current.value=""

        })
        .catch(()=>{
            console.log("Error.....");
        })

    }
    return(
        <div className={style.reviewsForm}>
            <form>
                <div>
                    <h2>Add Review</h2>
                </div>
                <div>
                    <input type="text" name='name' placeholder='Name' ref={name} />
                </div>
                <div>
                    <input type="email" name='email' placeholder='Email' ref={email}/>
                </div>
                <div>
                    <input type="password" name='password' placeholder='Password' ref={pass}/>
                </div>
                <div>
                    <input type="number" name='rating' placeholder='Ratings out of 5' ref={rating}/>
                </div>
                <div>
                    <textarea type="text" name='about' placeholder='About...' ref={about}/>
                </div>
                <div>
                    <input type="submit" onClick={addRev}/>
                </div>
            </form>
        </div>
    )
}
export default ReviewsForm