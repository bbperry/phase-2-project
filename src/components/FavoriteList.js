import React from 'react';

function FavoriteList({ book, onRemoveFavorite }) {

  const { title } = book;

  function handleRemoveFavorite() {
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
      .then((updatedBook) => onRemoveFavorite(updatedBook));
  }

  return (
<div>
    {title} <span><i class="ui x icon teal hover" onClick={()=>{handleRemoveFavorite(book)}}></i></span>
</div>
  );
}

export default FavoriteList;
