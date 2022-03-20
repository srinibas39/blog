import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { UFCsvg } from "../svg/UFCsvg"
import "./Header.css"

export const Header = () => {



    return <header className="header">
        <UFCsvg />
        <div className="header-box">
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/"><p>Blogs</p></NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/search"><p>Search Blogs</p></NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/about"><p>About</p></NavLink>
        </div>
    </header>
}
