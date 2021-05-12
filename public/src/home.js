// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books){
  return books.filter(book => book.borrows[0].returned === false).length;
}


// count occurences of each genre, return list of objects
// format of returned data [{name: genre, count: #}, {name: genre2, count: #}]
function getMostCommonGenres(books) {
  // initialize results (to return later)
  let results = [];

  // reduce to count occurence of each book...return genre and count of occurence
  let counts = books.reduce((acc, book) => {
    return {...acc, [book.genre]: (acc[book.genre] || 0) +1};
  }, []);

  for(const genre in counts){
    results.push({
      name:genre, count:counts[genre]
    });
  };

  results.sort((a, b) => {return b.count - a.count});

  // console log results to test output
  return results.slice(0, 5);
}



function getMostPopularBooks(books) {
  let results = [];
  books.sort((a, b)=>{
    return b.borrows.length - a.borrows.length;
  })
  books.forEach(book=>{
      bookName = book.title;
      borrows = book.borrows.length;
      results.push({name:bookName , count:borrows});
    })
  return results.slice(0,5);
}


function getMostPopularAuthors(books, authors) {
  let results = [];

  authors.forEach(author => {
    authorName = author.name.first + ' ' + author.name.last;
    let count = 0;
      books.forEach(book => {
        if(book.authorId === author.id){
          count = count + book.borrows.length;
        }
      })
    results.push({name: authorName, count: count});
  })
  results.sort((a, b) => {
    return b.count - a.count;
  })

  return results.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
