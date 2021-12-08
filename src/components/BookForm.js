import React, {useState} from 'react';

function BookForm({books, handleAddBook}) {

    const [addTitle, setAddTitle] = useState("");
    const [addAuthor, setAddAuthor] = useState("");
    const [addCategory, setAddCategory] = useState("");
    const [addImage, setAddImage] = useState("");


//   function handleSubmit(e) {
//     e.preventDefault()

//     const formData = {
//       id: books.length + 1,
//       title,
//       author,
//       category,
//       image,
//     }


//   fetch("http://localhost:3000/projects", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((r) => r.json())
//     .then((newBook) => {
//       handleAddBook(newBook);
//     });
// }

function handleSubmit(e) {
  e.preventDefault()
  handleAddBook({
    id: books.length + 1,
    title: addTitle,
    author: addAuthor,
    category: addCategory,
    image: addImage,
  })
  setAddTitle('')
  setAddAuthor('')
  setAddCategory('')
  setAddImage('')
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
              value={addTitle}
              onChange={(event) => setAddTitle(event.target.value)}
              />
              {/* {addTitle.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null} */}
        <label htmlFor="author">Author</label>
        <input
        placeholder="Insert Author"
          type="text"
          value={addAuthor}
          onChange={(event) => setAddAuthor(event.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
        placeholder="Category"
          type="text"
          value={addCategory}
          onChange={(event) => setAddCategory(event.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
        placeholder="Image URL"
          type="text"
          value={addImage}
          onChange={(event) => setAddImage(event.target.value)}
        />
        <button>Add Book</button>
        </form>

        
    </section>
  );
}

export default BookForm;