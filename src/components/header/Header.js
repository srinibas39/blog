
import { NavLink } from "react-router-dom"
import { UFCsvg } from "../svg/UFCsvg"
import "./Header.css"

export const Header = () => {
    return <header className="header">
        <UFCsvg />
        <div className="header-box">
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "links")} to="/"><p>Blogs</p></NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "links")} to="/search"><p>Search Blogs</p></NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "links")} to="/about"><p>About</p></NavLink>
        </div>
    </header>
}
