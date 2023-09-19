const connectToMongoDB = require('./mongodb')

const deleteData = async () => {
	try {
		const data = await connectToMongoDB()
		await data.deleteMany({ greet: "hello" })
		const result = await data.deleteOne({ name: "divyansh" })
		console.log(result.acknowledged)
	} catch (err) {
		console.log(err)
	}
}

deleteData()