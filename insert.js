const connectToMongoDB = require('./mongodb');

const insertData = async () => {
	try {
		const data = await connectToMongoDB();
		const result = await data.insertMany([{ name: 'rajat', age: 17, work: 'student' }, { greet: "hello", food: "paneer" }]);

		console.log(result)
	} catch (err) {
		console.error(err);
	}
};

insertData();
