let library = [];

const book = (name, author, yearOfPublication, genre, numberOfPages) => {
    this.name = name;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
};

const addBook = (name, author, yearOfPublication, genre, numberOfPages) => library.push({name, author, yearOfPublication, genre, numberOfPages}); // 1

const removeBook = (name) => { // 2
  library = library.filter(book => book.name !== name);
};

const findBooksByAuthor = (author) => { // 3
    return library.filter(book => book.author === author);
};

const filterBooksByGenre = (genre) => { // 4
    return library.filter(book => book.genre === genre);
};

const sortBooksByYear = () => { // 7
    return library.sort((a, b) => b.yearOfPublication - a.yearOfPublication);
};



addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

console.log(library);

removeBook("1984");

console.log(library);

console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));

console.log(filterBooksByGenre("Фэнтези"));

sortBooksByYear();

console.log(library);