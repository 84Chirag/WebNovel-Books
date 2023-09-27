import BookContext from "./bookContext";

const NovelState = (props) => {
    return(
        <BookContext.Provider value={''}>
            {props.children}
        </BookContext.Provider>
    )
}

export default NovelState;