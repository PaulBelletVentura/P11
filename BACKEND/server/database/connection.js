const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/argentBankDB'  // Correction adresse mongodb

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
