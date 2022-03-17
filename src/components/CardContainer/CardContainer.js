import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import "./CardContainer.css"

export const CardContainer = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    
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
    return <>{loading ? <div>loading...</div> : error ? <div>error</div> :
        <div className="card-container">
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />

        </div>}</>
}