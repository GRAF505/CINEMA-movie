function Card(props) {

    const {
        Title,
        Year,
        imdbID: id,
        Type,
        Poster
    } = props
    return <div id={id} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={Poster} alt=""/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
                {Title}
            </span>
            <p>{Year} <span className="right">{Type}</span></p>
        </div>
    </div>
}

export { Card }