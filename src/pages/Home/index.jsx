import { useBooks } from "../../cache/books.jsx";

export default () => {
  const [books] = useBooks();

  return (
    <div>
      <h1>Middlemarch</h1>
      <p>Your nightly bookstore</p>
      <input type="search" name="search" placeholder="Search books..." />

      <div>
        {books.map((book) => (
          <div data-book-id={book.id} key={book.id}>
            <p>{book.title}</p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};