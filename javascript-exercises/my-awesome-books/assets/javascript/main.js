import Library from './library.js'
import Book from './book.js'

let library = new Library();

// Add book to books
document.getElementById('add-button').addEventListener('click', (event) => {
  event.preventDefault();
  let title = document.getElementById("book-title");
  let author = document.getElementById("author");
  let book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  library.add(book);
});

const links = document.querySelectorAll('.links')
// console.log(links);
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    library.displaySection(link.id);
  });
});
