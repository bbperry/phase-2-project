import React from 'react';
import FavoriteList from './FavoriteList';

function BookShelf({ books, onRemoveFavorite }) {
  return (
    <div className="bookShelfDiv">
      <h3>Today's Lesson</h3>
      <div className="book"></div>
      <div>
        {' '}
        {books.map((book) => (
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
