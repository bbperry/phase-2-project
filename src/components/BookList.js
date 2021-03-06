import React, { useState } from 'react';
import BookCard from './BookCard.js';
import BookShelf from './BookShelf.js';
import FilterBar from './FilterBar.js';
import { Card } from 'semantic-ui-react';

function BookList({ books, onAddFavorite, onRemoveFavorite, onDeleteBook }) {
  const [bookSearch, setBookSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const booksToDisplay = books
    .filter((book) => {
      if (selectedCategory === 'All') return true;

      return book.category === selectedCategory;
    })
    .filter((book) =>
      book.title.toLowerCase().includes(bookSearch.toLowerCase())
    );

  return (
    <div className="bookListContainer">
      <BookShelf
        books={books.filter((book) => book.favorite)}
        onRemoveFavorite={onRemoveFavorite}
      />

      <FilterBar
        selectedCategory={selectedCategory}
        setBookSearch={setBookSearch}
        setSelectedCategory={setSelectedCategory}
        books={books}
      />

      <Card.Group itemsPerRow={4}>
        {booksToDisplay.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddFavorite={onAddFavorite}
            onDeleteBook={onDeleteBook}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default BookList;
