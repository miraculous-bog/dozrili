const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	mainPhoto: {
		type: String,
		required: true,
	},
	created_date: {
		type: String,
		required: true
	}
});

module.exports = {
	Article,
};
