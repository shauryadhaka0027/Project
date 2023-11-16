import { Route,Routes } from "react-router-dom"
import Product from "./Product.jsx"
import Pricing from "./Pricing.jsx"
import  Solution from "./Solution.jsx"
import Blogs from "./Blogs.jsx"
import Apps1 from "./Apps1.jsx"
import Support from "./support.jsx"
import Partner from "./Partner.jsx"
import Search from "./Search.jsx"
import Home from "./Home.jsx"
import Signup from "./Signup.jsx"
import Login from "./Login.jsx"
import TaskAndMangement from "./TaskAndMangement.jsx"




export default function AllRoutes(){
    return(

    
        <Routes>
        <Route  path="/Product"   element={<Product/>}/>
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Solution" element={<Solution/>} />
        <Route path="/Support" element={<Support/>} />
        <Route  path="/Blogs" element={<Blogs />} />
        <Route  path="/App" element={<Apps1 />} />
        <Route  path="/Partner" element={<Partner />} />
        <Route  path="/Search" element={<Search/>} />
        <Route  path="/" element={<Home/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/dashboard" element={<TaskAndMangement/>}/>
        

      </Routes>
    )
}