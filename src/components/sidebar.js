import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar({ links, show, close }) {
  const location = useLocation();
  return (
    <div className={show ? "sidebar active" : "sidebar"} onClick={close}>
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.Path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
}
