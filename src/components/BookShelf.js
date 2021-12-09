import React from 'react';
import FavoriteList from './FavoriteList'
import { Link } from 'react-router-dom';

function BookShelf({books, onRemoveFavorite}) {
  return (
    <div className="bookShelfDiv">
        {/* <img className="bookShelf" src="https://www.harpgallery.com/photos/ab/bk34734nathan9.jpg" /> */}
          <h3>Today's Lesson</h3>
        <div className="book"></div>
          <div> {books.map(book=> (
      <FavoriteList
      key={book.id}
      book={book}
      onRemoveFavorite={onRemoveFavorite}
      />
        ))}
      </div>
      </div>
      
  );
}

export default BookShelf;