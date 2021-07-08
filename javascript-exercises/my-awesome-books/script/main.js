import Library from './library.js'
import Book from './book.js'

let library = new Library();

if(booksOnLocalStorage == null){
  console.log("Null");
  localStorage.setItem('books', JSON.stringify([]));
} else {
  listBooks();
}

function createBookArticle(book){
  let bookList = document.getElementById("bookList");
  let bookIndex = books.indexOf(book)

  let bookItem = `<article class='book'>
    <div class="info">
      <span class='title'>${book.title}</span>
      <span class='author'>${book.author}</span>
    </div>
    <button type='button' class='remove-button' id='${bookIndex}'>Remove</button>
  </article>`;

  bookList.innerHTML += bookItem;
}

function listBooks(){
  document.getElementById("bookList").innerHTML = '';

  books = JSON.parse(localStorage.getItem('books'));
  books.forEach(book => {
    createBookArticle(book);
  });
}

// Add book to books
document.getElementById('add-button')
.addEventListener('click', (event) => {
  event.preventDefault()
  let title = document.getElementById("book-title");
  let author = document.getElementById("author");
  let book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  listBooks();
});

// remove book
document.querySelectorAll('.remove-button')
.forEach(button => {
  button.addEventListener('click',(event) => {
    event.preventDefault();
    let bookIndex = button.id;
    books.splice(bookIndex, 1)
    localStorage.setItem('books', JSON.stringify(books));
    listBooks();
  });
});
