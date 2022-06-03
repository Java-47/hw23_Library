class Book {
    constructor(ISBN, Title, Author, Year) {
    this._ISBN = ISBN;
    this._Title = Title;
    this._Author = Author;
    this._Year = new Date(Year);
    }

    get ISBN(){
        return this._ISBN;
    }
    get Title(){
        return this._Title;
    }
    get Author(){
        return this._Author;
    }
    get Year(){
        return this._Year.getUTCFullYear();
    }
    set ISBN(ISBN){
        this._ISBN = ISBN;

    }
    set Title(Title){
        this._Title = Title;

    }
    set Author(Author){
        this._Author = Author;

    }
    set Year(Year){
        this._Year = Year;

    }
    
    toString() {
        return `ISBN: ${this._ISBN}, Author: ${this._Title}, Year of publishing: ${this.Year}`;
    }
    createBookDOMElement(tag) {
        const element = document.createElement(tag);
        element.appendChild(document.createTextNode(this.toString()));
        return element;
    }
    
}


