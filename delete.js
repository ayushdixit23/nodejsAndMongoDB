const connectToMongoDB = require('./mongodb')

const deleteData = async () => {
	try {
		const data = await connectToMongoDB()
		const result = await data.deleteMany({ greet: "hello" })
		console.log(result)
	} catch (err) {
		console.log(err)
	}
}

deleteData()