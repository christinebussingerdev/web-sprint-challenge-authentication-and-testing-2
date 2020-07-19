const router = require('express').Router();
const jwt = require('jsonwebtoken')
//imports
const db = require('../data/dbConfig');

// definitions
const authError = {err: 'invalid credentials'}
const welcome = {msg: `welcome ${username}`}


router.post('/register', async (req, res) => {
  try {
    const {username, password} = req.body

    const existingUser = await db.findBy({username})

    if (existingUser) {res.status(409).json({err: 'username taken'})}

    const newUser = await db.createUser({username, password: bcrypt.hash(password, 12)}) 

    if (newUser) {res.status(201).json({msg: 'user created'})}

  }
  catch(err) {next(err)}
});

router.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body

    const user = await db.findBy({username})

    if (!user) {res.status(401).json(authError)}

    const checkPass = await bcrypt.compare(password, user.password)

    if (!checkPass) {res.status(401).json(authError)}

    const payload = {
      userId: user.id,
      username: username,

    }

    res.cookie('token', jwt.sign(payload, 'cake'))
    res.json(welcome)
    
  }
  catch {

  }
});

module.exports = router;
