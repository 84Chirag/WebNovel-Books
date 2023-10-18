import BookContext from "./bookContext";
import { useState, useEffect } from "react";

const NovelState = (props) => {

    const Books = []
    const [books, setBooks] = useState(Books)
    // const Items = []
    // const [items, setitems] = useState(Items)
    const [loading, setLoading] = useState(true);

    const getbooks = async () => {
        try {
            const url = 'http://localhost:80/book/books';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                }
            });
            if (response.ok) {
                const json = await response.json();
                setBooks(json);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getbooks();
    }, []); // Empty dependency array to run the effect only once
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
        <BookContext.Provider value={{ books, getbooks, loading }}>
            {props.children}
        </BookContext.Provider>
        // <BookContext.Provider value={{ items, getbooks1}}>
        //     {props.children}
        // </BookContext.Provider>
    )
}

export default NovelState;