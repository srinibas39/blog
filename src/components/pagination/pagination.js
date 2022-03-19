

export const Pagination = ({ pagesArr ,setCurrPage }) => {
    return <nav aria-label="Page navigation example">
        <ul class="pagination">

            {
                pagesArr.map((el, idx) => {
                    return <li onClick={()=>setCurrPage(el)} key={idx} className="page-item"><a className="page-link" href="#">{el}</a></li>
                })

            }

        </ul>
    </nav>
}