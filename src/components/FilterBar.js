import React from "react"
import { Select } from 'semantic-ui-react'


const categoryOptions = [
  { key: 'af', value: 'af', text: 'Phonology & Articulation' },
  { key: 'ax', value: 'ax', text: 'Concepts & Prepositions' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
] 


function FilterBar({ setBookSearch, books }) {
  return (
  
 <div>   

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setBookSearch(e.target.value)}
      />
<Select placeholder='Select your Category' options={categoryOptions} />

    </div>
  );
}

export default FilterBar;