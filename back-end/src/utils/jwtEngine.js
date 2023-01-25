/* eslint-disable import/no-extraneous-dependencies */
const { sign, verify } = require('jsonwebtoken');
const HttpException = require('./http.exception');

require('dotenv/config');

const createToken = (data) => {
  const token = sign(
    { data },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
      algorithm: 'HS256',
    },
  );

  return token;
};

const validateToken = (token = null) => {
  if (!token) throw new Error('Token not found');

  try {
    const { data } = verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throw new HttpException(401, 'Expired or Invalid Token');
  }
};

module.exports = {
  createToken,
  validateToken,
};
