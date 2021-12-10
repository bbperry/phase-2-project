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
  // const [detail, setDetail] = useState('');

  useEffect(() => {
    fetch('https://phase-2-project-data.herokuapp.com/books')
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

  function handleAddDetail(detail) {
    setBooks(
      books.map((book) =>
        book.id === detail.id ? { ...book, detail: "" } : book
      )
    );
  }

  // function handleAddDetail(detail) {
  //   setBooks([...books, books.detail=detail)
  // }

  // function handleAddDetail(detail) {
  //   setBooks(books.detail=detail)
  // }
  

  function handleDeleteBook(deletedBook) {
    setBooks(books.filter(book=> book.id !== deletedBook.id))
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

        <Route 
          path="/books/:id" 
          component={() => ( <BookDetail
           handleAddDetail={handleAddDetail}
           books={books}
          //  detail={detail}
          //  setDetail={setDetail}
           /> )} />

        <Route path="/books" component={() => <BookList 
          books={books} 
          onAddFavorite={handleAddFavorite} 
          onRemoveFavorite={handleRemoveFavorite}
          onDeleteBook={handleDeleteBook}
          />} />

        <Route path="/" component={Home}>
          <Home />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
