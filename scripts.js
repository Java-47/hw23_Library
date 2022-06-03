const library = new Library()

addBook.onclick = function(){
    const book = new Book (ISBN.value, Title.value, Author.value, Year.value);
    if (library.addBook(book)) {
        clearStats();
        const li = book.createBookDOMElement('li');
        const buttonDel = document.createElement('button');
        buttonDel.appendChild(document.createTextNode('X'));
        buttonDel.classList.add('del');
        buttonDel.onclick = function ({target}) {
            target.parentElement.remove();
            library.removeBook(book.ISBN);
            clearStats();
            
        }
        li.append(buttonDel);
        bookList.append(li);
        if (!stats.firstElementChild.nextElementSibling) {
            addStats();
        }
        
        
    } else {
        alert('Incorrect data');
    }
    //ISBN.value = Title.value = Author.value = Year.value = '';
}

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
        addStats();
        
    }

}

function addStats(){
    stats.appendChild(library.createLibraryStatsDOMElement())
}