
import { useState } from "react";
import { Card } from "../Card/Card";
import { CardContainer } from "../CardContainer/CardContainer";
import { useData } from "../DataContext";
import "./SearchBox.css"
export const SearchBox = () => {
    const [text, setText] = useState("");
    const { data, setData } = useData();
    const [search, setSearch] = useState(false)
    console.log(text);
    const filteredData = data.filter((el) => el.tag_list.includes(text))
    return <>
        <div className="searchBox">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={() => setSearch(true)}>Search</button>
        </div>
        <div className="card-container">

            {
                search && <Card data={filteredData} />
            }
        </div>
    </>
}