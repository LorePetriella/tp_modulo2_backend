
const processesArguments  = require('./aux_function');

const books = require('./books');  

function main() {
    
    const processedArguments = processesArguments(process.argv);
   

if (Object.keys(processedArguments).length === 0) {
    console.log(books.getAll());
    return
}


for (prop in processedArguments){ 

  switch (prop) {
    
    case 'id':
      console.log(books.getById(processedArguments.id))
      break;
    case 'name':
      console.log(books.getByName(processedArguments.name))
      break;
    case 'author':
      console.log(books.getByAuthor(processedArguments.author))
      break;  
    case 'tag':
      console.log(books.getByTag(processedArguments.tag))
      break;  
    case 'sold':     
      console.log(books.getSoldByAuthor(processedArguments.sold))
      break;    
    default: console.log('El parámetro ingresado no es válido')
  
  }}}
  
  main();