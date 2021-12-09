import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, onAddFavorite, onDeleteBook }) {

  const { title, author, category, image, id, detail } = book;

  const path = `/books/${id}`


  function handleAddFavorite() {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: !book.favorite,
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => onAddFavorite(updatedBook));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteBook(book));
  }



  return (
    <div class="ui link card">
  <div class="image">
    <img src={image} alt={title}/>
  </div>
  <div class="content">
  <Link class="header" to={path} >{title}</Link>
    <div class="meta">
      <span class="date">by {author}</span>
    </div>
    <div class="description">
      This book is helpful for {category}
    </div>
    <br></br><br></br>
    <div>{detail}</div>
  </div>
  <div class="extra content">
    <p><Link to={path} >Details</Link></p>
    <button onClick={()=>{handleAddFavorite(book)}} >Add to Todays Lesson</button>
  </div>
  <button class="delete" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDeleteClick(book) }}><h1>X</h1></button>
</div>
  );
}

export default BookCard;
