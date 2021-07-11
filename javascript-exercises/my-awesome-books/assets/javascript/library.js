export default class Library {
    constructor(){
      this.books = [];
      this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
      if(this.localStorageBooks == null){
        localStorage.setItem('books', JSON.stringify([]));
      } else {
        this.display();
      }
    }

    display(){
      document.getElementById("bookList").innerHTML = '';
      const books = this.localStorageBooks;
      for(let i = 0; i < books.length; i++){
        this.createBook(books[i], i);
      }
      
      const removeButtons = document.querySelectorAll('.remove-button');
      for(let i = 0; i < removeButtons.length; i++){
        removeButtons[i].addEventListener('click', (event) => {
          event.preventDefault();
          this.remove(i);
        });
      };
    }

    createBook(book, id){
      let bookList = document.getElementById("bookList");
      let bookItem = `<article class='book'>
        <div class="info">
          <span class='title'>"${book.title}" by </span>
          <span class='author'>${book.author}</span>
        </div>
        <button type='button' class='remove-button' id=${id}>Remove</button>
      </article>`;
    
      bookList.innerHTML += bookItem;
    }

    add(book){
      this.books = this.localStorageBooks;
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.display();
    }

    remove(id){
      this.books = this.localStorageBooks;
      let book = this.books.splice(id, 1)
      this.notice(['success', `${book[0].title} removed successfully!`])
      localStorage.setItem('books', JSON.stringify(this.books));
      this.display();
    }

    showPage() {
      let sections = document.getElementsByClassName('spa-links');
      sections.forEach(section, ()=>{
        section.classList.toggle("show-page");
      });
    }

    notice(message){
      let notice = document.getElementById('notice')
      if(message[0] == 'success'){
        notice.style.color = 'green';
        notice.textContent = message[1];
      } else {
        notice.style.color = 'red';
        notice.textContent = message[1];
      }

      setTimeout(() => {
        notice.innerHTML = '';
      }, 2000);
    }
}