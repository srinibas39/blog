import { UFCsvg } from "../svg/UFCsvg"
import "./Header.css"

export const Header=()=>{
    return <header className="header">
        <UFCsvg/>
        <div className="header-box">
             <p><a>Blogs</a></p>
             <p><a>Search Blogs</a></p>
             <p><a>About</a></p>
        </div>
    </header>
}