import style from './nav.module.css'
import ReviewList from './ReviewList'
import ReviewsForm from './ReviewsForm'
const Reviews=(x)=>{
    return(
        <div className={style.reviews}>
           <center> <h2 className={style.logo}>Reviews</h2></center>
           <div>
            <ReviewsForm id={x.id}></ReviewsForm>
            <ReviewList id={x.id}></ReviewList>
            </div>
        </div>
    )
}
export default Reviews