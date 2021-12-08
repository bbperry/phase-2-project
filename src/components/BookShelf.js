import React from 'react';
import FavoriteList from './FavoriteList'
import { Link } from 'react-router-dom';

function BookShelf({books}) {
  return (
    <div className="bookShelfDiv">
        <img className="bookShelf" src="https://www.harpgallery.com/photos/ab/bk34734nathan9.jpg" />
        <div className="book"> {books.map(book=> (
      <FavoriteList
      key={book.id}
      book={book}
        
      />
        ))}
      </div>
      </div>
      
  );
}

export default BookShelf;