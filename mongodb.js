const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';

const connectToMongoDB = async () => {
	try {
		const client = new MongoClient(url);
		await client.connect();
		const db = client.db('ayush');
		return db.collection('data');
	} catch (err) {
		console.error('Error connecting to MongoDB:', err);
	}
};

module.exports = connectToMongoDB
