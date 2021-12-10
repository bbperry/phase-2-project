import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookDetail({ handleAddDetail }) {
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
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        detail,
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => handleAddDetail(updatedBook));
  }

  const { title, author, category, image } = book;

  return (
    <section>
      <div className="bookDetail">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            <strong>by {author}</strong>
          </p>
          <div>
            <p>{category}</p>
            <div className="detailDiv">
              <p>Additional Notes:</p>
              <p>{book.detail}</p>
            </div>
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
