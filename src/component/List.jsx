import { Card } from "./Card"


function List(props) {

    const { list = [] } = props
    return <div className="list">

        {list.length ? (
            list.map(movie =>
                <Card {...movie} />)
        ) : (
            <h1>Ничего не найдено</h1>

        )}
    </div>
}



export { List }