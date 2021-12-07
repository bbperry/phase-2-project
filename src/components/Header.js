import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <span>Children's Bookshelf</span>
      </h1>
      <nav>
      <Link class="ui animated fade button" tabindex="0" to="/books">
          <div class="visible content">All the Books!</div>
          <div class="hidden content"><i class="book icon"></i><i class="book icon"></i></div>
        </Link>
        <Link class="ui animated fade button" tabindex="1" to="/books/new">
          <div class="visible content">Add a Book!</div>
          <div class="hidden content"><i class="plus icon"></i><i class="book icon"></i></div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
