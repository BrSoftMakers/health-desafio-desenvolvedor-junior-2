import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import Pets from '../models/pets.types';
import User from '../models/user.types';

export const petsConverter = {
  toFirestore(pets: Pets): DocumentData {
    return { ...pets };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Pets {
    const data = snapshot.data(options);

    return {
      id: data.id,
      breed: data.breed,
      type: data.type,
      imageUrl: data.imageUrl,
      name: data.name,
      age: data.age,
      nameOwner: data.nameOwner,
      telephoneOwner: data.telephoneOwner,
    };
  },
};

export const userConverter = {
  toFirestore(user: User): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  },
};
