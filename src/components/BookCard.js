import React, { useState } from 'react';



function BookCard({ book }) {

  const { title, author, category, image } = book;

  return (
    <li className="card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="details">
        <h4>{title} by {author}</h4>
        <p>{category}</p>
        <p>
        </p>
      </div>

    </li>
  );
}

export default BookCard;
