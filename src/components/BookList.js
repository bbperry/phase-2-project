import React from 'react';
import BookCard from './BookCard.js';
import { Card } from 'semantic-ui-react';

function BookList({ books }) {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Card.Group>
    </div>
  );
}

export default BookList;
