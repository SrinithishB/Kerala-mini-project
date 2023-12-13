import Logo from './Logo'
import style from './nav.module.css'
import FooterForm from './FooterForm'
const Footer=()=>{
    return(
        <div className={style.footer}>
            <Logo></Logo>
            <FooterForm></FooterForm>
            <center>
            <p>It is an mini project created using ReactJS using CRUD operations. This project is about the tourist spots of Kerala.</p>
            </center>
        </div>
    )
}
export default Footer