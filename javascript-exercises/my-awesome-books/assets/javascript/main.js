import Library from './library.js'
import Book from './book.js'

let library = new Library();

// Add book to books
document.getElementById('add-button').addEventListener('click', (event) => {
  event.preventDefault();
  let title = document.getElementById("book-title");
  let author = document.getElementById("author");
  
  if(title.value !== '' && author.value !== ''){
    let book = new Book(title.value, author.value);
    title.value = '';
    author.value = '';
    library.add(book);
    library.notice(['success', `${book.title} added successfully`]);
  } else {
    library.notice(['fail', 'Field(s) cannot be empty']);
  }
});


// function showSinglePage(){
//   let singlePageApp = document.getElementById('single-page-app');

//   let sectionOne = `
//   <section id='display-books'  class="show-page">
//     <h1>My Awesome Books</h1>
//     <div id='bookList' class="book-list"></div>
//   </section>`;

//   let sectionTwo = `
//   <section id='new-book-form' class="new-book-form">
//     <h2>Add new book</h2>
//     <form>
//       <div>
//         <input type="text" name="book-title" id="book-title" placeholder="Title">
//       </div>

//       <div>
//         <input type="text" name="author" id="author" placeholder="Author">
//       </div>
      
//       <button type="button" value="Add" id="add-button">Add book</button>
//     </form>
//   </section>`;

//   let links = document.querySelectorAll('.nav-links');
//   console.log()
//   links.forEach(link, (event)=> {
//     event.preventDefault();
//     singlePageApp = '';

//     if(link.id === 'link-1'){
//       singlePageApp += sectionOne;
//     } else if(link.id === 'link-2'){
//       singlePageApp += sectionTwo;
//     }
//   });
// }
