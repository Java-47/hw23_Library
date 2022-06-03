class Library{
    constructor() {
        this._books = [];
    }
    addBook(book) {
        const index = this._books.findIndex(e => e.ISBN === book.ISBN);
        if (index < 0) {
            this._books.push(book);
        }
        return index < 0;
    }
    get minYear() {
        
        return this._books.reduce((min, b) => b.Year < min ? b.Year : min, this._books[0].Year)
    }

    get maxYear() {
        return this._books.reduce((max, b) => b.Year > max ? b.Year : max, this._books[0].Year)
    }

    removeBook(ISBN) {
        const index = this._books.findIndex(e => e.ISBN === ISBN);
        if (index >= 0) {
            this._books.splice(index, 1);
        }
        return index >= 0;
    }

    get AverageYear() {
        return this._books.reduce((accum, b) => accum + b.Year, 0) / this._books.length;
    }

    createLibraryStatsDOMElement() {
        const divStats = document.createElement('div');
        const stats = [];
        stats[0] = this._createDOMElement(`Newest Book: ${this.maxYear}`, 'h3');
        stats[1] = this._createDOMElement(`Oldest Book: ${this.minYear}`, 'h3');
        stats[2] = this._createDOMElement(`Average Year: ${this.AverageYear.toFixed(2)}`, 'h3');
        divStats.append(...stats);
        return divStats;
    }

    _createDOMElement(content, tag) {
        const element = document.createElement(tag);
        element.appendChild(document.createTextNode(content));
        return element;
    }


}


