import BoxContainer from './BoxContainer'
import style from './nav.module.css'
const Content=()=>{
    return(
        <div className={style.content}>
            <div className={style.quoteDiv}>
                <p className={style.quote}>"Kerala is not just a place; it's a state of mind, a celebration of nature's beauty and human warmth."</p>
                <a href="#place" style={{borderRadius: "100px",border:"3px solid whitesmoke",padding:"5px"}}><i class="fa-solid fa-angle-down" style={{color: "#ffffff"}}></i></a>
            </div>
            <div id='place'></div>
            <BoxContainer db="touristspot"/>
        </div>
    )
}
export default Content