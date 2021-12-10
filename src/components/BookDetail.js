import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function BookDetail({ handleAddDetail }) {
  const [book, setBook] = useState([]);
  const [detail, setDetail] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://phase-2-project-data.herokuapp.com/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  function handleSubmitDetails(e) {
    e.preventDefault()

    fetch(`https://phase-2-project-data.herokuapp.com/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        detail
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => handleAddDetail(updatedBook));
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
            <p>{category}</p>
            
            <p>Additional Notes:</p>
            <p>{book.detail}</p>
            <br></br>
            
            <form class="ui form" onSubmit={handleSubmitDetails}>
        
        <input
          required
          placeholder="add notes..."
          type="text"
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
        />
        <button>Add Notes</button>
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
