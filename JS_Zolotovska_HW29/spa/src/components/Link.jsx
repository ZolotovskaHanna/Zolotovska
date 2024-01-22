import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../helpers/context";

function Link(props) {
    const { href, to, children } = props;
    const color = useContext(ThemeContext)
    return href
    ? (
        <a
            href={href}
            className="hover:underline"
            style={{ color }}>{children}
        </a>
    )
    : (
        <NavLink
            to={to}
            className="hover:underline"
            style={{ color }}>{children}
        </NavLink>   
    )
}

export default Link