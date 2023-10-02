import BookContext from "./bookContext";
import { useState } from "react";

const NovelState = (props) => {

    const Books = []
    const [books, setbooks] = useState(Books)
    // const Items = []
    // const [items, setitems] = useState(Items)

    const getbooks = async () => {
        // const loading  : await 'true'
        const url = 'http://localhost:80/book/books';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxOTBiMTBhN2JjOTIzYThjNjlhNjE4In0sImlhdCI6MTY5NjE0MDE1NX0.QjOwFBKX6Y7021WHEbxirv0TV408IOeuh-_qVlFj_58"
            }
        });
        const json = await response.json();
        // console.log(json);
        setbooks(json)
    }
    // const getbooks1 = async () => {
    //     // const loading  : await 'true'
    //     const url = 'https://anime-manga-and-novels-api.p.rapidapi.com/novels?pageSize=6&page=1';
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '8964135e8dmshfeacaadec4f44b1p11bc18jsnbe27d6145a57',
    //             'X-RapidAPI-Host': 'anime-manga-and-novels-api.p.rapidapi.com'
    //           }
    //     });
    //     const json = await response.json();
    //     // console.log(json);
    //     setitems(json)
    // }

    return (
        <BookContext.Provider value={{ books, getbooks }}>
            {props.children}
        </BookContext.Provider>
        // <BookContext.Provider value={{ items, getbooks1}}>
        //     {props.children}
        // </BookContext.Provider>
    )
}

export default NovelState;