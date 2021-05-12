// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
}


function getTotalNumberOfBorrows(account, books) {
  // initialize count
  let count = 0;
    books.forEach(book => {
      book.borrows.forEach(borrow => {
        if(borrow.id === account.id){
          count++;        }
      })
    })
  return count;
}


function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];
  let borrowed = books.filter(book => !book.borrows[0].returned);


  borrowed.forEach(book =>{
    if(book.borrows[0].id === account.id){
      let author = authors.find(author => author.id === book.authorId);
      book.author = author;
      possessedBooks.push(book);
    }
  });
  return possessedBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
