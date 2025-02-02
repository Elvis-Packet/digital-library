# Digital Library Code Challenge

## Learning Goals
- Implement a mini web app to practice components, props, state, and events in React.
- Work with dynamic data displayed using React components.
- Use controlled forms for user input and conditional rendering.

## Introduction
This project involves building a **Digital Library** app where users can:
- View a collection of books.
- Add new books to the library.
- Filter books based on title or genre.

## Requirements
For this project, you must:
- Display a dynamic list of books.
- Implement a form for users to add new books.
- Add a search bar to filter books by title or genre.
- Write a well-structured `README.md` file.

## Project Setup
### **1. Create and Initialize the Project**
```sh
git clone <repository-url>
cd digital-library
npx create-react-app .
npm install
```

### **2. Run the Application**
```sh
npm start
```
Open `http://localhost:3000` in your browser.

## Initial Data
The app starts with the following dataset:
```js
const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
];
```

## Core Features
- **Book List:** View all books with title, author, and genre.
- **Add Books:** Users can add new books using a form.
- **Search Functionality:** Users can filter books by title or genre.

## Bonus Features
- Edit existing books in the list.
- Delete books from the library.
- Highlight the search term in displayed results.

## Project Structure
```
📁 digital-library
├── 📂 src
│   ├── 📂 components
│   │   ├── BookList.js
│   │   ├── BookForm.js
│   │   ├── SearchBar.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
├── README.md
```

## Code Overview
### **App Component** (`App.js`)
This is the main component that:
- Manages state for books and search input.
- Adds new books.
- Filters books based on the search term.

```jsx
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
```

## Guidelines for Submission
- Ensure your application runs without errors.
- Write clean, well-organized, and commented code.
- Provide a detailed README including:
  - Project description
  - Setup instructions
  - Features list
  - Screenshots (if possible)
- Ensure at least **20 commits**.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make changes and commit (`git commit -m "Added feature"`).
4. Push changes (`git push origin feature-name`).
5. Open a pull request.

## License
This project is open-source and available under the **MIT License**.

## Author
Developed by **[Elvis Mbugua ]**.

Happy Coding! 🚀

