import React, { useState } from 'react';
// import { Card } from "semantic-ui-react";

function BookCard({ book }) {

  const { title, author, category, image } = book;

  return (
    <div class="ui card huge">
  <div class="image">
    <img src={image}/>
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
  </div>
</div>
  );
}

export default BookCard;
