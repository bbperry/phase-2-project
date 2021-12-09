import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import BookForm from './components/BookForm.js';
import Home from './components/Home.js'
import BookDetail from './components/BookDetail.js'
import { Switch, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  function handleAddBook(newBook) {
    const newBookArray = [...books, newBook];
    setBooks(newBookArray);
  }

  function handleAddFavorite(favorite) {
    setBooks(
      books.map((book) =>
        book.id === favorite.id ? { ...book, favorite: true } : book
      )
    );
  }

  function handleRemoveFavorite(favorite) {
    setBooks(
      books.map((book) =>
        book.id === favorite.id ? { ...book, favorite: false } : book
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/books/new"
          component={() => (
            <BookForm books={books} handleAddBook={handleAddBook} />
          )}
        />

        <Route path="/books/:id" component={BookDetail} />

        <Route path="/books" component={() => <BookList 
          books={books} 
          onAddFavorite={handleAddFavorite} 
          onRemoveFavorite={handleRemoveFavorite}
          />} />

        <Route path="/" component={Home}>
          <Home />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
