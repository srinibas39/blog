import "./Card.css"

export const Card = () => {
    return <div className="card">
        <div className="img-container">
            <img src={"https://picsum.photos/200/300"} alt="loading..." />
        </div>
        <div className="content-container">
            <div className="tags">
                <div className="like">
                    <span class="material-icons-outlined">
                        favorite
                    </span>
                    8
                </div>
                <div className="time">
                    <span class="material-icons-outlined">
                        calendar_today
                    </span>

                    <time>Jan 14 2021</time>
                </div>

            </div>

            <h2>Introduction to javascript selector</h2>
            <p>We have many DOM methods to save html elements in JS variables. In this blog, I will be explaining ho...</p>
            <button className="btn-readmore"><a>READ MORE</a></button>

        </div>
    </div>
}