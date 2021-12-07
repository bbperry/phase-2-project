import React from 'react';

function Header() {
  return (
    <header>
      <h1>
        <span>Children's Bookshelf</span>
      </h1>
      <nav>
      <div class="ui animated fade button" tabindex="0">
          <div class="visible content">All the Books!</div>
          <div class="hidden content"><i class="book icon"></i><i class="book icon"></i></div>
        </div>
        <div class="ui animated fade button" tabindex="0">
          <div class="visible content">Add a Book!</div>
          <div class="hidden content"><i class="plus icon"></i><i class="book icon"></i></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
