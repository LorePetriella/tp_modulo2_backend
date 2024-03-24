const booksDB = require("./DB.js");




const getAll = () => {
  return booksDB;
};

const getById = (id) => booksDB.find(book => book.id == id);

const getByName = (name) => booksDB.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));

const getByTag = (tag) => { return booksDB.filter(book => {
    const lowercaseTags = book.tags.map(t => t.toLowerCase());
    return lowercaseTags.includes(tag.toLowerCase());
});}

const getByAuthor = (author) => booksDB.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));


const getSoldByAuthor = (author) => {
  
      
   return booksDB.reduce((acc, current) => {
    if (current.author.toLowerCase() == author.toLowerCase()) {

        acc += current.sold;
    }
    return acc;

}, 0); 

}

module.exports = {
  getAll,
  getById,
  getByName,
  getByTag,
  getByAuthor,
  getSoldByAuthor,
};



