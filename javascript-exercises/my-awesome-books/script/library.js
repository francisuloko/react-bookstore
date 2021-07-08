export default class Library {
    constructor(){
      this.books = [];
      this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
    }

    add(title, author){
      this.books = this.localStorageBooks;
      let book = new Book(title, author);
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      listBooks();
    }

    remove(){}
}
