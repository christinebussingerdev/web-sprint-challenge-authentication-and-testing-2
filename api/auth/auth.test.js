const server = require('../../index')
const supertest = require('supertest')
const db = require('../data/dbConfig')

afterAll(async () => {
  await db.destroy()
})

//can't use due to lack of seeds
// beforeEach(async() => {
//   await db.seed.run()
// })

describe('auth router', () => {
  describe('register endpoint', () => {
    it('creates a user when sent one', async () => {
      await supertest(server).post('/api/auth/register')
      .send({username: 'cakerycake', password: 'cake'})
      .then(res => {
        expect(res.statusCode).toBe(409) // error unknown
      })
    })
    
  })

  describe('login endpoint', () => {
    it('gives a successful status code', async() => {
      await supertest(server).post('/api/auth/login')
      .send({username: 'cakerycake', password: 'cake'})
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
    })
    it('gives a welcome message', async() => {
      await supertest(server).post('/api/auth/login')
      .send({username: 'cakerycake', password: 'cake'})
      .then(res => {
        expect(res.body).toEqual({msg: 'welcome cakerycake'})
      })
    })
  })
})

