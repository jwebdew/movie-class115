

const MovieItem = ({movieInfo}) => {
    const {
        title, 
        poster_path,
        overview

    } = movieInfo;
    return (
        <div className="movie-item">
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{overview}</p>
            </div>
        </div>
    ) 
}

export default MovieItem;