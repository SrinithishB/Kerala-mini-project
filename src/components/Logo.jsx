import { useNavigate } from 'react-router-dom'
import style from './nav.module.css'
const Logo=()=>{
    let navigate=useNavigate("https://tourtokerala.netlify.app") 
    let Go=()=>{
        navigate('/')
    }
    return(
        <h1 className={style.logo} onClick={Go}>Kerala</h1>
    )
}
export default Logo
