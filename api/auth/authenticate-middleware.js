

module.exports = (req, res, next) => {

  if (!req.cookie.token) {res.status(401).json({ you: 'shall not pass!' })}
  
};
