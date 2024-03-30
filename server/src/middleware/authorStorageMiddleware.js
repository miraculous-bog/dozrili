const multer = require('multer');

const getStorage = () => {
	return multer.diskStorage({
		destination: function (req, file, cb) {
			console.log(file);
			cb(null, `uploads/`);
		},
		filename: function (req, file, cb) {
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
			cb(null, uniqueSuffix + file.originalname);
		}
	});
}
module.exports = getStorage;