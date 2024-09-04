const Star = (
    props: {
        isFavorite: boolean,
        toggleFavorite: () => void
    }) => {
    const starIcon = props.isFavorite ? "star-filled.png" : "star-empty.png"
    const buttonLabel = props.isFavorite ? "Remove from favorites" : "Add to favorites"
    const starAlt = props.isFavorite ? "Remove from favorites" : "Add to favorites"

    return (
        <button
            className="card--favorite-button"
            onClick={props.toggleFavorite}
            aria-label={buttonLabel}
            aria-pressed={props.isFavorite}
        >
            <img
                src={`/icons/${starIcon}`}
                className="card--favorite"
                alt={starAlt}
            />
        </button>
    );
}

export default Star;
