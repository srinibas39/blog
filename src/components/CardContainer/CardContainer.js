import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import { Pagination } from "../pagination/pagination"
import "./CardContainer.css"

export const CardContainer = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const [currPage,setCurrPage]=useState(1);
    
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await axios.get("https://dev.to/api/articles");
                setLoading(false);
                setData([...res.data])

            }
            catch (err) {
                setLoading(false)
                setError(err)
                setTimeout(() => {
                    setError("")
                }, 2000)

            }
        })()
    }, [])

    //implementation of pagination
    const pages =data.length/6 //10 is the limit that in each page we can have a maximum of 10 items.

    const pagesArr=[];
    for(let i=1;i<=pages;i++){
        pagesArr.push(i);
    }
    const si=(currPage-1)*6;
    const ei=si+6;

    const filterData=data.slice(si,ei)

    console.log(data);

    return <>{loading ? <div>loading...</div> : error ? <div>error</div> :
        <div className="card-container">
            <Card data={filterData} />
        </div>}
        <Pagination pagesArr={pagesArr} setCurrPage={setCurrPage}/>
        </>
}

