import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="mainHeader">
      <h1 >
        <span >Lesson Plan Bookshelf</span>
      </h1>
      <nav >
      <Link class="ui animated fade button teal" tabindex="0" to="/books">
          <div class="visible content">Library</div>
          <div class="hidden content"><i class="book icon"></i><i class="book icon"></i></div>
        </Link>
        <Link class="ui animated fade button teal" tabindex="1" to="/books/new">
          <div class="visible content">Add a Book!</div>
          <div class="hidden content"><i class="plus icon"></i><i class="book icon"></i></div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
