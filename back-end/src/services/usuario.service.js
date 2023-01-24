/* eslint-disable import/no-extraneous-dependencies */
const fs = require('firebase-admin');

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

  const userJson = {
    nome,
    email,
    senha,
    categoria: 'admin',
  };

  const newUser = await usuariosDb.doc(email).set(userJson);

  return newUser;
};

module.exports = {
  registerUser,
};
