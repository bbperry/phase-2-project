import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookForm({ handleAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title,
      author,
      category,
      image,
    };

    // function handleChange(event) {
    //   setFormData({
    //     ...formData,
    //     [event.target.id]: event.target.value,
    //   });
    // }

    //   function handleSubmit(e) {
    //     e.preventDefault()

    //     const formData = {
    //       id: books.length + 1,
    //       title,
    //       author,
    //       category,
    //       image,
    //     }

    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newBook) => {
        handleAddBook(newBook);
      });
  }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   handleAddBook({
  //     id: books.length + 1,
  //     title: addTitle,
  //     author: addAuthor,
  //     category: addCategory,
  //     image: addImage,
  //   })
  //   setAddTitle('')
  //   setAddAuthor('')
  //   setAddCategory('')
  //   setAddImage('')
  // }

  return (
    <section class="container">
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add a New Book</h4>
        <label htmlFor="title">Title</label>
        <input
          required
          placeholder="Insert Title"
          type="text"
          title="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {/* {addTitle.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null} */}
        <label htmlFor="author">Author</label>
        <input
          required
          placeholder="Insert Author"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        {/* <label htmlFor="category">Category</label>
        <input
        placeholder="Category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        /> */}
        <label htmlFor="category">Category</label>
        <select
          required
          name="filter"
          placeholder="select a category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {/* <option value="All">All</option> */}
          <option value="" disabled selected hidden>Please Choose...</option>
          <option value="Phonology & Articulation">
            Phonology & Articulation
          </option>
          <option value="Concepts & Prepositions">
            Concepts & Prepositions
          </option>
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
          <option value="none">none</option>
        </select>

        <label htmlFor="image">Image</label>
        <input
          required
          placeholder="Image URL"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button>Add Book</button>
      </form>
    </section>
  );
}

export default BookForm;
