const db = require('../data/dbConfig')

module.exports = {
  find,
  findById,
  findBy,
  createUser
}

function find() {
  return db('users')
}

function findById(id) {
  return db('users')
  .where(id)
}

function findBy(filter) {
	return db('users')
		.select('id', 'username', 'password')
		.where(filter).first()
}

async function createUser(newUser) {
  const [id] = await db('users')
  .insert(newUser)
  return findById(id)
}