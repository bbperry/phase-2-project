import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard.js'
import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {books.map(book=> <BookCard key={book.id} book={book} />)}
        </div>
       
      </header>
    </div>
  );
}

export default App;
