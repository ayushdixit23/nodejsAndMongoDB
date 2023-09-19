const connectToMongoDB = require('./mongodb')

const updateData = async () => {
	try {
		const data = await connectToMongoDB()
		data.updateOne({})
	} catch (err) {
		console.log(err)
	}
}

updateData()