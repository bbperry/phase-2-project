import React from 'react';
import { Link } from 'react-router-dom';

function FavoriteList({ book }) {

  const { title, author, category, image, id } = book;

  

  return (
<div>
    {title}
</div>
  );
}

export default FavoriteList;
