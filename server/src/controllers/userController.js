const bcrypt = require('bcryptjs');
const { User } = require('../models/Users.js');


const getUser = async (req, res, next) => {

	if (req.user) {
		const userId = req.user._id;
		console.log(await User.findById(userId));
		const { _id,name, created_date } = await User.findById(userId);
		res.json({ user: { _id, name, created_date } });
	} else {
		res.status(400);
	}
};

const deleteUser = async (req, res, next) => {
	const { userId } = req.user;
	const user = await User.findById(userId);

	try {

		await user.delete();

		res.json({
			message: "Success",
		});

	} catch (error) {
		res.status(400)
	}

}


module.exports = {
	getUser,
	deleteUser
};
