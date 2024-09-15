import React from "react"
import {Route, Routes , Navigate} from "react-router-dom"
import BigProjects from "./BigProjects"
import MiniProjects from "./MiniProjects"
const ProjectRoute =()=>{
    return(
        <div >
            <Routes>
                <Route path="/" element={ <Navigate to={"/bigprojects" } />} />
                <Route path="/bigprojects" element={<BigProjects />} />
                <Route path="/miniprojects" element={<MiniProjects />} />
            </Routes>
        </div>
    )
}
export default ProjectRoute