const jwt = require('jsonwebtoken');

const secret = 'supersupersecret';
const expiration = '4h';

module.exports = {
  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // function for authenticated routes
  authMiddleware: function ({ req }) {
    // token can be sent via req.query, req.headers, or req.body
    let token =
      req.query.token || req.headers.token || req.headers.authorization;

    // if token is req.headers.authorization we need to
    // extract the token value from ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        // split the token which will give us the value after the split
        .split(' ')
        // pop that value out of the list
        .pop()
        // trim any whitespace off the value popped.
        .trim();
    }

    if (!token) {
      return req;
    }

    // verify token and retrieve user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.employer = data;
    } catch {
      console.log('Invalid Tolkien... I mean Invalid Token ;P');
    }

    // return the updated request
    return req;
  },
};
