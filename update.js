const connectToMongoDB = require('./mongodb')

const updateData = async () => {
	try {
		const data = await connectToMongoDB()
		data.updateOne({ name: "rajat" }, { $set: { name: "divyansh" } })
		data.updateOne({ name: "divyansh" }, { $set: { name: "rajat" } })
		data.updateOne({ name: "rajat" }, { $set: { age: 20 } })
		console.log(data)
	} catch (err) {
		console.log(err)
	}
}

updateData()