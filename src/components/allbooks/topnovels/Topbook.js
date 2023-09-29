import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import themeContext from '../../../context/themes/themeContext'

const Topbook = (props) => {

  // const {item} = props;
  const { book } = props;

  // Access the togglemode and modestate values from the themeContext.
  const { modestate } = useContext(themeContext);
  // console.log(modestate)

  const cardStyle = {
    background: modestate === 'light' ? 'white' : 'black',
    color: modestate === 'light' ? 'black' : 'white',
    textDecoration: 'none'
  }

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  return (
    <div className="card col-md-3 mx-2 my-3" style={cardStyle}>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ece39f6-6737-42b8-b282-f99688062708/dcg7oa6-ce4d4f77-ef81-43c6-af80-45b6a294ccb6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllY2UzOWY2LTY3MzctNDJiOC1iMjgyLWY5OTY4ODA2MjcwOFwvZGNnN29hNi1jZTRkNGY3Ny1lZjgxLTQzYzYtYWY4MC00NWI2YTI5NGNjYjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iox8OkT8eoUkIbWWWZ5ei1PRUyDtqroyzY6rZV-jQBA" className="card-img-top my-2" alt="..." style={{ height: "45vh" }} />
      <div className="card-body" style={cardStyle}>
        {/* <h4 className="card-text" id='title'>{item.name}</h4>
        <p className="card-text" id='description'>{truncateText(item.description, 99)}</p> */}

        <h4 className="card-text" id='title'> <Link to={book.link} style={cardStyle}>{book.title}</Link>  </h4>
        <p className="card-text" id='description'>{truncateText(book.description,99)}</p> 
        <p><i className="fa-solid fa-tag" style={{ color: "#005eff" }}> {book.tag}</i></p>
      </div>
    </div>
  )
}

export default Topbook