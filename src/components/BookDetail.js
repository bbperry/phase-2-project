import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function BookDetail({ onAddDetail }) {
  const [book, setBook] = useState([]);
  const [detail, setDetail] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  function handleSubmitDetails() {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        detail
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => onAddDetail(updatedBook));
  }

  const { title, author, category, image } = book;

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p><strong>{author}</strong></p>
          <div className="extra">
            <span>{category}</span>
            <br></br>
            <br></br>
            <form class="ui form" onSubmit={handleSubmitDetails}>
        
        <label htmlFor="title">Add Details</label>
        <input
          required
          placeholder="add details..."
          type="text"
          title="title"
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
        />
        <button>Add Detail</button>
            </form>
            <br></br>
            <Link to="/books">Go Back!</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
