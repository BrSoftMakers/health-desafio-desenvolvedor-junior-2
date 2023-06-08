/* eslint-disable import/no-extraneous-dependencies */
const md5 = require('md5');
const fs = require('firebase-admin');
const HttpException = require('../utils/http.exception');

const serviceAccount = require('../utils/tough-forest-312613-e56963204489.json');

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});

const firestoreDB = fs.firestore();

const usuariosDb = firestoreDB.collection('usuarios');

const registerUser = async (body) => {
  const {
    nome, email, senha,
  } = body;

  const encryptPassword = md5(senha);

  const userJson = {
    nome,
    email,
    senha: encryptPassword,
    categoria: 'admin',
  };

  const newUser = await usuariosDb.doc(email).set(userJson);

  return newUser;
};

const requestLogin = async (body) => {
  const { email, senha } = body;

  const request = await usuariosDb.where('email', '==', email).get();

  let user;

  request.forEach((doc) => {
    user = doc.data();
  });

  const encryptedPassword = md5(senha);

  if (!request || user.senha !== encryptedPassword) {
    throw new HttpException(401, 'User or password invalid');
  }

  return { message: 'Usuário autenticado com sucesso', user };
};

module.exports = {
  registerUser,
  requestLogin,
};
