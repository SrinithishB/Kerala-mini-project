import Nav from "./components/Nav"
import Content from "./components/Content"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Place from "./components/Place"
import Footer from "./components/Footer"
import EditReview from "./components/EditReview"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route element={<Content/>} path="/"></Route>
                    <Route element={<Place/>} path="/place/:x"></Route>
                    <Route element={<EditReview/>} path="/editreview/:x"></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
            
        </div>
    )
}
export default App