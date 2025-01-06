import { Link } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./sidebar"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
export default function Navbar () {
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            Path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            Path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            Path: "/settings",
            icon: faCog
        }
    ]
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">RecipeHub</a>
                <div className="nav-links">
                    { links.map(link => (
                        <Link to={link.Path} key={Link.name}>{link.name}</Link>
                    ))}
                    {/*<a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a>*/}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <Sidebar links={links} show={showSidebar} />
        </>
    )
}