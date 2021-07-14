export default class Library {
    constructor(){
      this.books = [];
      this.bookList = document.getElementById("book-list");
      this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
      this.notice = document.getElementById('notice')

      if(this.localStorageBooks == null){
        localStorage.setItem('books', JSON.stringify([]));
      } else {
        this.displayBooks();
        this.displaySection();
      }
    }

    save(){
      localStorage.setItem('books', JSON.stringify(this.books));
    }

    createBook(book, id){
      let bookItem = `<article class='book'>
        <div class="info">
          <span class='title'>"${book.title}" by </span>
          <span class='author'>${book.author}</span>
        </div>
        <button type='button' class='remove-button' id=${id}>Remove</button>
      </article>`;
    
      this.bookList.innerHTML += bookItem;
    }

    displayBooks(){
      document.getElementById("book-list").innerHTML = '';
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

    add(book){
      if(book.title !== '' && book.author !== ''){
        this.books = this.localStorageBooks;
        this.books.push(book);
        this.save()
        this.displayNotice(['success', `${book.title} added successfully!`])
        this.displayBooks();
      } else {
        this.displayNotice(['fail', 'Field(s) cannot be empty']);
      }
    }

    remove(id){
      this.books = this.localStorageBooks;
      let book = this.books.splice(id, 1)
      this.displayNotice(['success', `${book[0].title} removed successfully!`])
      this.save()
      this.displayBooks();
    }

    displayNotice(message){
      if(message[0] == 'success'){
        this.notice.style = 'color: green';
        this.notice.textContent = message[1];
      } else {
        this.notice.style = 'color: red';
        this.notice.textContent = message[1];
      }

      setTimeout(() => {
        this.notice.innerHTML = '';
      }, 2000);
    }

    displaySection(link){
      if(link == 101){
        document.getElementById('new-book-form').style.display = 'block'
        document.getElementById('books-section').style.display = 'none'
      } else {
        document.getElementById('books-section').style.display = 'block'
        document.getElementById('new-book-form').style.display = 'none'
      }
    }
}
