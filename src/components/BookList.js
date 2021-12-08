import React, {useState} from 'react';
import BookCard from './BookCard.js';
import BookShelf from './BookShelf.js';
import FilterBar from './FilterBar.js'
import { Card } from 'semantic-ui-react';


function BookList({ books, handleAddFavorite }) {
  const [bookSearch, setBookSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState('All');



  // const booksToDisplay = books.filter((book) => {
  //   return book.title.toLowerCase().includes(bookSearch.toLowerCase());
  // })
  
  // .filter((book) => {
    
  //   return book.category === category;
  // })

  const booksToDisplay = books
  .filter((book) => {
      if (selectedCategory === 'All') return true;

      return book.category === selectedCategory;
    }).filter((book) => book.title.toLowerCase().includes(bookSearch.toLowerCase()));


  return (
    <div>
      <BookShelf books={books.filter((book) => book.favorite)}/>
    
      <FilterBar 
        selectedCategory={selectedCategory}
        setBookSearch={setBookSearch}
        setSelectedCategory={setSelectedCategory} 
        books={books}
      />

      <Card.Group itemsPerRow={5}>
        {booksToDisplay.map((book) => (
          <BookCard key={book.id} book={book}
          handleAddFavorite={handleAddFavorite}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default BookList;
