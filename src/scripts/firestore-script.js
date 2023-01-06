/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { addDoc, collection } = require('firebase/firestore');
const { getFirestore } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyCIJc1f_-Kuix0oj0-gZDAvz6pqIyvUhXI',
  authDomain: 'pettest-fbf71.firebaseapp.com',
  projectId: 'pettest-fbf71',
  storageBucket: 'pettest-fbf71.appspot.com',
  messagingSenderId: '117266355612',
  appId: '1:117266355612:web:248974e6a435dbe985e459'
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const petshop = [
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://media.istockphoto.com/id/1451702194/photo/gato-mimoso.jpg?b=1&s=170667a&w=0&k=20&c=SDOiuSo05XmKeyDMloO4xiheh3dXgmaOJv0VNg9ub0Q=',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1606715895281-ccdf0143f198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://media.istockphoto.com/id/1451702194/photo/gato-mimoso.jpg?b=1&s=170667a&w=0&k=20&c=SDOiuSo05XmKeyDMloO4xiheh3dXgmaOJv0VNg9ub0Q=',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1596921825946-d738194fac80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1584102026323-27d7a9abd970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1600965189611-1894aa638760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1567268377583-d1aaf9ccfc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    age: '1',
    breed: 'Sphynx',
    imageUrl:
    'https://images.unsplash.com/photo-1601927061917-f4a9e60d8b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    nameOwner: 'João',
    telephoneOwner: '81991485234'
  }
];

const main = async () => {
  await Promise.all(
    petshop.map(async (pets) => {
      await addDoc(collection(db, 'petshop'), pets);
    })
  );
};


main().then(() => process.exit());
