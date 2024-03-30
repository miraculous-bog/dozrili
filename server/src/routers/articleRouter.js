const express = require('express');
const router = express.Router();
const { adminCheckMiddleware } = require('../middleware/adminCheckMiddleware');
const { fileEditingMiddleware } = require('../middleware/fileEditingMiddleware');
const { addArticle, getArticles, getArticle, deleteArticle } = require('../controllers/articleController');


const multer = require('multer');
const getStorage = require('../middleware/authorStorageMiddleware');
const storage = getStorage();
console.log(storage);
const upload = multer({ storage: storage });

// router.get('/', getArticles);
router.post('/', upload.single('mainPhoto'), addArticle);
router.get('/', getArticles);
router.get('/:id', getArticle);
// router.put('/:id', changeArticle);
router.delete('/:id', deleteArticle);


module.exports = {
	articleRouter: router,
};


