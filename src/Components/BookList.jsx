import React from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} ({book.genre})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;