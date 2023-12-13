import style from './nav.module.css'
import { useNavigate, useParams } from "react-router-dom"
const Box=(d)=>{  
    let navigate=useNavigate("http://localhost:3001") 
    let open=()=>{
        navigate(`/place/${d.data.id}`)   
    }
    return(
        <div className={style.box} onClick={open}>
            <img src={d.data.image} alt="Image can't able to load" srcSet="" />
            <br />
            <h3>{d.data.sname}</h3>
            <p>{d.data.sortdes}</p>
        </div>
    )
}
export default Box