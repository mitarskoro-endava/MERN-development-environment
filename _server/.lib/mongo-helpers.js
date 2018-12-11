const mongoose = require("mongoose");

const mappedSchema = function(data) {
	return mongoose.Schema(data, {
		virtuals: true,
		toObject: {
			transform: (doc, obj) => {
				delete obj._id;
				delete obj.__v;
				return obj;
			}
		},
		toJSON: {
			transform: (doc, obj) => {
				delete obj._id;
				delete obj.__v;
				return obj;
			}
		},
		timestamps: true
	});
};
module.exports = {
	Schema: mappedSchema
	//model: mongoose.model.bind(mongoose)
};
