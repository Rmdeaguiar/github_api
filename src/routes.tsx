import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Repos from "./pages/Repos"
import { loadRepos } from "./services/ReposService"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/repos/:username" element={<Repos loadRepos={loadRepos} />} />

            <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
    )
}