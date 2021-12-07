import React, {useState} from 'react';

function BookForm({handleAddBook}) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");


  function handleSubmit(e) {
    e.preventDefault()

    const formData = {
      title,
      author,
      category,
      image,
    }


  fetch("http://localhost:3000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((newBook) => {
      handleAddBook(newBook);
    });
}


  return (
    <section class="container">
        <form className="form" onSubmit={handleSubmit}>
            <h4>Add a New Book</h4>
            <label htmlFor="title">Title</label>
            <input
              placeholder="Insert Title"
              type="text"
              title="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              />
              {title.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null}
        <label htmlFor="author">Author</label>
        <input
        placeholder="Insert Author"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
        placeholder="Category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
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