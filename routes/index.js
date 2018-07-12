var express = require('express');
const ctrl = require('../controller/controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/addBook', function(req, res, next) {
  res.render('addBook');
});


router.post('/api/addBook', function(req, res, next) {
  let newBook = req.body;
  console.log(newBook);
  ctrl.addBook(newBook, res);
});


router.get('/api/books', function(req, res, next) {
  var year = req.query.year;
  var genres = req.query.genres;
  var author = req.query.author;
  var title = req.query.title;

  console.clear();

  console.log('YEAR : ', year);
  console.log('GENRES : ', genres);
  console.log('AUTHOR : ', author);
  console.log('TITLE : ', title);
  // console.log(year.length);



  //get all books
  if(year === undefined && genres === undefined && author === undefined && title === undefined){
    console.log('Getting all books.');
    ctrl.getAllBooks(res);
}


  
//get books by year
if(year && year != '' && genres === undefined && author === undefined && title === undefined) {
    console.log('Getting books by year.');
    ctrl.getBooksByYear(year, res);
}



// get books by gernes
if(genres && genres != '' && year === undefined && author === undefined && title === undefined){
    console.log('Getting books by genres.');
    let searchGenres = {
      genres: genres
    }
    ctrl.getBooksBySearch(searchGenres, res);
}



// get books by author
if(author && author != '' && year === undefined && genres === undefined && title === undefined){
    console.log('Getting books by author.');
    // let searchAuthor = {
    //   author: author
    // }
    let authorName = author.toString().toLowerCase();
    ctrl.getBooksByAuthorOrTitle('author', authorName, res);
}


// get books by title
if(title && title != '' && year === undefined && genres === undefined && author === undefined){
    console.log('Getting books by title.');
    // let searchAuthor = {
    //   author: author
    // }
    let titleName = title.toString().toLowerCase();
    ctrl.getBooksByAuthorOrTitle('title', titleName, res);
}


// get books by year and genres
if(year && genres && year != '' && genres != '' && author === undefined && title === undefined) {
    console.log('Getting books by year and genres.');
    let genresName = genres.toString().toLowerCase();

    let search = {
      publishYear : year,
      genres: genresName
    };
    
    ctrl.getBooksBySearch(search, res);
}



// // get books by genres and title
// if(year && genres && year != '' && genres != '' && author === undefined || author == ''){
//     console.log('Getting books by genres and title.');
//     let genresName = genres.toString().toLowerCase();
//     let titleName = title.toString().toLowerCase();

//     let search = {
//       genres: genresName
//     };
    
//     ctrl.getBooksByYearGenresAndAuthorSearch(search, 'title', titleName, res);
// }



// get books by genres and title
if(title && genres && title != '' && genres != '' && author === undefined && year === undefined){
      console.log('Getting books by genres and title.');
      let genresName = genres.toString().toLowerCase();
      let titleName = title.toString().toLowerCase();
  
      let search = {
        genres: genresName
      };
      
      ctrl.getBooksByYearGenresAndAuthorSearch(search, 'title', titleName, res);
}



// get books by author and title
if(author && title && author != '' && title != '' && year === undefined && genres === undefined){
  console.log('Getting books by author and title.');
  let authorName = author.toString().toLowerCase();
  let titleName = title.toString().toLowerCase();

  let search = {};
  
  ctrl.getBooksByYearGenresAuthorAndTitleSearch(search, 'title', titleName, 'author', authorName, res);
}



// get books by year, genres and Author
if(year && genres && author && year != '' && genres != '' && author != '' && title === undefined){
      console.log('Getting books by year, genres and author.');
      
      let genresName = genres.toString().toLowerCase();
      let authorName = author.toString().toLowerCase();

      let search = {
        publishYear : year,
        genres: genresName
      };
      
      ctrl.getBooksByYearGenresAndAuthorSearch(search, 'author', authorName, res);
}



// get books by year, genres, Author and title
if(year && genres && author && title && year != '' && genres != '' && author != '' && title != ''){
      console.log('Getting books by year, genres, author and title.');
      
      let genresName = genres.toString().toLowerCase();
      let authorName = author.toString().toLowerCase();
      let titleName = title.toString().toLowerCase();

      let search = {
        publishYear : year,
        genres: genresName
      };
      
      ctrl.getBooksByYearGenresAuthorAndTitleSearch(search, 'author', authorName, 'title', titleName, res);
}


  
});




module.exports = router;
