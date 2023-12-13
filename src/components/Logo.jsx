import { useNavigate } from 'react-router-dom'
import style from './nav.module.css'
const Logo=()=>{
    let navigate=useNavigate("http://localhost:3001") 
    let Go=()=>{
        navigate('/')
    }
    return(
        <h1 className={style.logo} onClick={Go}>Kerala</h1>
    )
}
export default Logo