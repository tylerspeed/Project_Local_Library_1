// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id){
  return authors.find(author => author.id === id);
}

function findBookById(books, id){
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books){
  let borrowed = books.filter(book => book.borrows[0].returned === false);
  let checkedIn = books.filter(book => book.borrows[0].returned === true);
  let results = [borrowed, checkedIn];
  return results;
}

function getBorrowersForBook(book, accounts){
  return book.borrows.map(borrow => mapToBorrow(borrow, accounts)).slice(0,10);
}

function mapToBorrow(borrow, accounts){
   let account = accounts.find(account => account.id === borrow.id);
   account.returned = borrow.returned;
   return account;
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
