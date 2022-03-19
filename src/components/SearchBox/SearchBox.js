
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./SearchBox.css"
export const SearchBox = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(false)



    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("data"));
        setData(getData)
    }, [])


    const filteredData = data && data.filter((el) => el.tag_list.includes(text))

    const handleChange = (t) => {
        setText(t)
        setSearch(false)
    }

    return <>
        <div className="searchBox">
            <input type="text" value={text} onChange={(e) => handleChange(e.target.value)}></input>
            <button onClick={() => setSearch(true)}>Search</button>
        </div>
        <div className="card-container">

            {
                search && <Card data={filteredData} />

            }

        </div>
    </>
}