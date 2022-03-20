import { useState } from "react"
import { Link } from "react-router-dom"
import { UFCsvg } from "../svg/UFCsvg"
import "./Header.css"

export const Header = () => {

    return <header className="header">
        <UFCsvg />
        <div className="header-box">
            <Link to="/"><p>Blogs</p></Link>
            <Link to="/search"><p>Search Blogs</p></Link>
            <Link to="/about"><p>About</p></Link>
        </div>
    </header>
}