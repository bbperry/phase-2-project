import React, {useState} from 'react';
import BookCard from './BookCard.js';
import FilterBar from './FilterBar.js'
import { Card } from 'semantic-ui-react';

function BookList({ books }) {
  const [bookSearch, setBookSearch] = useState("")

  const booksToDisplay = books.filter((book) => {
    return book.title.toLowerCase().includes(bookSearch.toLowerCase());
  })

  return (
    <div>
      <FilterBar 
        setBookSearch={setBookSearch} 
        books={books}
      />

      <Card.Group itemsPerRow={5}>
        {booksToDisplay.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Card.Group>
    </div>
  );
}

export default BookList;
