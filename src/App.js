import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import BookForm from './components/BookForm.js';
import FilterBar from './components/FilterBar.js'
import { Switch, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  function handleAddBook(newBook) {
    const newBookArray = [ ...books, newBook ];
    setBooks(newBookArray);
  }



  return (
    <div className="App">
      <Header />
      <Switch>
      <Route
        path="/books/new"
        component={() => <BookForm books={books} handleAddBook={handleAddBook} />}
      />
      <Route
        path="/books"
        component={() => <BookList books={books} />}
      />
      </Switch>
    </div>
  );
}

export default App;
