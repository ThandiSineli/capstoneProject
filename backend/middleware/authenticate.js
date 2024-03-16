import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  // Get the token from the cookie header manually
  const cookie = req.headers.cookie;
  if (!cookie || !cookie.startsWith('token=')) {
    return res.sendStatus(401);
  }
  
  const token = cookie.split('=')[1];

  jwt.verify(token, process.env.SECRET_key, (err, user) => {
    if (err || !user) return res.sendStatus(403);
    req.user = user;
    next(); 
  });
};

export default authenticate;
