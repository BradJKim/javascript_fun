const myLibrary = [new Book("1", "2", "3"), new Book("2", "2", "3"), new Book("3", "2", "3")]

let addBookForm = document.querySelector(".addBookForm");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let title = document.getElementById('title')
    let author = document.getElementById('author')
    let genre = document.getElementById('genre')

    addBookToLibrary(new Book(title.value, author.value, genre.value))
});

function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre= genre;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    updateLibraryAdd(book)
}

function removeBookByTitle(title) {
    let book;

    for (let i=0; i<myLibrary.length; i++){
        if (myLibrary[i].title === title){
            book = myLibrary.splice(i, 1)[0]
            console.log("book removed")
            break;
        }
    }
    
    updateLibraryRemove(book)
}

function updateLibraryAdd(book){
    let library = document.querySelector('.library')

    let bookElement = document.createElement('li')
    bookElement.classList.add("bookItem")
    bookElement.setAttribute('id', book.title)
    bookElement.textContent = book.title + " " + book.author + " " + book.genre

    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Remove"
    deleteButton.addEventListener('click', (e) => {
        removeBookByTitle(book.title)
    })

    bookElement.appendChild(deleteButton)
    library.appendChild(bookElement)
}

function updateLibraryRemove(book){
    let library = document.querySelector('.library')
    let bookElement = document.getElementById(book.title)

    library.removeChild(bookElement)
}

myLibrary.forEach((book) => updateLibraryAdd(book))