import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, handleAddFavorite }) {

  const { title, author, category, image, id } = book;

  const path = `/books/${id}`

  return (
    <div class="ui link card">
  <div class="image">
    <img src={image} alt={title}/>
  </div>
  <div class="content">
    <a class="header">{title}</a>
    <div class="meta">
      <span class="date">by {author}</span>
    </div>
    <div class="description">
      This book is helpful for {category}
    </div>
  </div>
  <div class="extra content">
    <p><Link to={path} >Details</Link></p>
    <button onClick={()=>{handleAddFavorite(book)}} >Add to Todays Lesson</button>
  </div>
</div>
  );
}

export default BookCard;
