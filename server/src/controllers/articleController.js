const { saveArticleDB, getArticlesDB, getArticleIdDB, deleteArtilceByID } = require('../services/articleService');


const addArticle = async (req, res, next) => {

	const {
		title,
		content,
		category, } = req.body;

	const requiredFields = ['title', 'content', 'category'];
	const areFieldsMissing = !requiredFields.every(field => req.body[field]);

	if (areFieldsMissing) {
		return res.status(400).json({ message: 'Missing required fields' });
	}
	if (!req.file) {
		return res.status(400).json({ message: 'Missing required image' });
	}

	// req.file містить інформацію про `mainPhoto`, завантажене через Multer
	//   const mainPhoto = { ...req.file, type: 'mainPhoto', cluster: 'author' };

	//   const mainPhoto = {...mainPhoto};
	console.log(req.file.destination + req.file.filename);
	const asyncSave = await saveArticleDB({
		title,
		content,
		category,
		mainPhoto: req.file.destination + req.file.filename
	});
	console.log(asyncSave);
	if (!asyncSave) {
		return res.status(500).json({ message: 'Article creation failed' });
	}
	return res.status(200).json({ message: `Article created successfully`, post: asyncSave });
}


const getArticles = async (req, res, next) => {
	try {
		const receivedArticles = await getArticlesDB();
		return res.status(200).json({ receivedArticles });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};


const getArticle = async (req, res, next) => {
	const id = req.params.id;
	try {
		const recievedArticle = await getArticleIdDB(id);
		return res.status(200).json(recievedArticle);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}


const getPendingProjects = async (req, res, next) => {
	try {
		const pendingProjects = await getPendingCharityProjectsDB();
		return res.status(200).json({ pendingProjects });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

const changeArticle = async (req, res, next) => {
	return;
}

const deleteArticle = async (req, res, next) => {
	try {
		const desiredDelete = req.params.id;
		console.log(desiredDelete);
		const projectDeleted = await deleteArtilceByID(desiredDelete);
		console.log(projectDeleted);
		!projectDeleted ? res.status(500).json({ message: err.message }) : res.status(200).json({ message: "Article deleted successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
}

const acceptProject = async (req, res, next) => {
	const projectId = req.params.id;
	try {
		await acceptProjectDB(projectId);
		return res.status(200).json({ message: "Charity Project accepted successfully" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
const rejectProject = async (req, res, next) => {
	const projectId = req.params.id;
	try {
		await rejectProjectDB(projectId);
		return res.status(200).json({ message: "Charity Project rejected successfully" });
	} catch (error) {
		next(error);
	}
}

module.exports = {
	addArticle,
	getArticles,
	getArticle,
	deleteArticle
}
// getArticles, addArticle, getArticle, changeArticle, deleteArticle