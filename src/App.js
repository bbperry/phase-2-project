import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import BookList from './components/BookList.js';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  function handleAddBook(newBook) {
    const newBookArray = [newBook, ...books];
    setBooks(newBookArray);
  }

  return (
    <div className="App">
      <Header />
      <BookList books={books} />
      
    </div>
  );
}

export default App;
