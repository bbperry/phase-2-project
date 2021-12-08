import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
 const [book, setBook] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  const { title, author, category, image} = book


  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="extra">
            <span >{category}</span>
            <br></br>
            <Link to="/books">Go Back!</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
