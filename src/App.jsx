import React, { useState } from "react";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import SearchBar from "./Components/SearchBar";

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Digital Library</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookForm addBook={addBook} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;