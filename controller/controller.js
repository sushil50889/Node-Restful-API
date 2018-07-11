const Book = require('../model/bookModel');

const ctrl = {};


ctrl.addBook = (newBook, res) => {
    Book.create(newBook)
        .then((savedBook) => {
            ctrl.successResponse(res, 'New book added successfully.');
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBookById = (id, res) => {
    Book.findById(id)
        .then((book) => {
            let itemCount = book.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, book);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getAllBooks = (res) => {
    Book.find({})
        .then((books) => { 
            let itemCount = books.length;           
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBooksByYear = (year, res) => {
    Book.find({publishYear : year})
        .then((books) => {
            let itemCount = books.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBooksByAuthorOrTitle = (key, value, res) => {
    Book.find({}).where(key).regex(value)
        .then((books) => {
            let itemCount = books.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBooksBySearch = (search, res) => {
    Book.find(search)
        .then((books) => {
            let itemCount = books.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBooksByYearGenresAndAuthorSearch = (search, key, value, res) => {
    Book.find(search).where(key).regex(value)
        .then((books) => {
            let itemCount = books.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.getBooksByYearGenresAuthorAndTitleSearch = (search, key1, value1, key2, value2, res) => {
    Book.find(search).where(key1).regex(value1).where(key2).regex(value2)
        .then((books) => {
            let itemCount = books.length;
            ctrl.responseWithData(res, 'Get data successfully.', itemCount, books);
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.updateBook = (id, updatedBook, res) => {
    Book.findByIdAndUpdate(id, updatedBook)
        .then((book) => {
            ctrl.successResponse(res, 'New book updated successfully.');
        })
        .catch((err) => {
            ctrl.failResponse(res, 'Something wrong. Please try again.');
        })
}



ctrl.successResponse = (res, message) => {
    return res.json({
            success: true,
            msg: message
    });
}


  
ctrl.failResponse = (res, message) => {
    return res.json({
            success: false,
            msg: message
    });
}



ctrl.responseWithData = (res, message, count, data) => {
    return res.json({
            success: true,
            msg: message,
            totalDocument: count,
            data: data
    });
}





module.exports = ctrl;