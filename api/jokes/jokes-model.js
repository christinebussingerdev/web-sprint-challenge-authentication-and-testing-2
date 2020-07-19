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
  .where(filter)
}

async function createUser(newUser) {
  const [id] = await db('users')
  .insert(newUser)
  return findById(id)
}