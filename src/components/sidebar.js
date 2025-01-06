import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export default function Sidebar({links, show}) {
    return (
        <div className={show ? 'sidebar active' : 'sidebar'}>
            {links.map(link => (
                <Link to={link.path} className="sidebar-links" href="#!" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}