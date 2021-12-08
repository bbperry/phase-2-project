import React from 'react';

function FilterBar({ setBookSearch, setSelectedCategory, selectedCategory }) {
  return (
    <div className="filterBar">
      <div class="ui icon input">
        <input
          class="ui search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setBookSearch(e.target.value)}
        />
        <i class="search icon"></i>
      </div>

      <select
        class="ui animated fade button teal"
        name="filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">Choose a category</option>
        <option value="Phonology & Articulation">
          Phonology & Articulation
        </option>
        <option value="Concepts & Prepositions">Concepts & Prepositions</option>
        <option value="Prediction & Inference">Prediction & Inference</option>
        <option value="Phonological Awareness & Literacy Development">
          Phonological Awareness & Literacy Development
        </option>
        <option value="Diversity & Inclusion">Diversity & Inclusion</option>
        <option value="Preschool Language">Preschool Language</option>
        <option value="Social Emotional Learning">
          Social Emotional Learning
        </option>
        <option value="Special Occasions">Special Occasions</option>
        <option value="Social Justice">Social Justice</option>
      </select>
    </div>
  );
}

export default FilterBar;
