const { Article } = require('../models/Article');
const fs = require('fs');
const path = require('path');

const saveArticleDB = async ({
	title, content, category, mainPhoto
}) => {
	const article = new Article({
		title, content, category, mainPhoto,
		created_date: new Date().toISOString(),
	});
	const asyncSave = await article.save();
	return asyncSave;
};


const getCharityProjectByIdDB = async (charityProjectId) => {
	try {
		const project = await Article.findById(charityProjectId);
		if (!project) {
			throw new Error(`Charity project with ID ${charityProjectId} not found`);
		}
		return project;
	} catch (error) {
		throw new Error(`Error getting charity project: ${error.message}`);
	}
};
const getArticlesDB = async () => {
	try {
		return await Article.find().select('-content');
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch articles');
	}
};


const getArticleIdDB = async (id) => {
	try {
		const article = await Article.findById(id);

		if (!article) {
			throw new Error('No projects found');
		}
		return article;

	} catch (error) {
		throw new Error('Error retrieving charity projects');
	}
};



const deleteFile = (filePath) => {
	fs.unlink(filePath, (err) => {
		if (err) {
			// Обробляємо помилку, якщо файл не було знайдено або інша проблема
			console.error('Error deleting file', err);
			throw err;
		}
		console.log('File was deleted');
	});
};
const deleteArtilceByID = async (articleId) => {
	const article = await Article.findById(articleId);
	if (!article) {
		return res.status(404).json({ message: 'Article not found' });
	}

	// Видалення файлу зображення
	const imagePath = path.join(__dirname, '..', '..', article.mainPhoto);
	deleteFile(imagePath);
	return await Article.findByIdAndDelete(article._id);
}
const acceptProjectDB = async (projectId) => {
	try {
		return await Article.findByIdAndUpdate({ _id: projectId }, { $set: { status: "accepted" } });
	} catch (err) {
		throw new Error("Error accepting charity project");
	}
}

const rejectProjectDB = async (projectId) => {
	try {
		return await Article.findByIdAndUpdate({ _id: projectId }, { $set: { status: "rejected" } });
	} catch (err) {
		throw new Error("Error accepting charity project");
	}
}

// const changeTruckById = async (driverId, truckId, type) => await Truck.findByIdAndUpdate({ created_by: driverId, _id: truckId }, { $set: { type } });



// const assignTruckById = async (driverId, truckId) => await Truck.findByIdAndUpdate({ _id: truckId }, { $set: { assigned_to: driverId } });

module.exports = {
	saveArticleDB,
	getArticlesDB,
	getArticleIdDB,
	deleteArtilceByID
};

// getPendingCharityProjectsDB,
// getCharityProjectsDB,
// getCharityProjectByIdDB,
// deleteCharityProjectsDB,
// acceptProjectDB,
// rejectProjectDB,