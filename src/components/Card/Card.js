import "./Card.css"

export const Card = ({ data }) => {
    return <>
        {
            data.map((el) => {
                return <div className="card">
                    <div className="img-container">
                        <img src={el.cover_image} alt="loading..." />
                    </div>
                    <div className="content-container">
                        <div className="tags">
                            <div className="like">
                                <span className="material-icons-outlined">
                                    favorite
                                </span>
                                {el.positive_reaction_count}
                            </div>
                            <div className="time">
                                <span className="material-icons-outlined">
                                    calendar_today
                                </span>

                                <time>{el.readable_publish_date}</time>
                            </div>

                        </div>

                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                        <button className="btn-readmore"><a href={el.url}>READ MORE</a></button>

                    </div>
                </div>
            })
        }
    </>
}