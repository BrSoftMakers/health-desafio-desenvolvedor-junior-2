import path from 'node:path';
import multer from 'multer';
import { Router } from 'express';

import { createCategory } from './useCases/category/createCateogry';
import { listCategory } from './useCases/category/listCategory';
import { deleteCategory } from './useCases/category/deleteCategory';
import { createPet } from './useCases/pet/createPet';
import { listPet } from './useCases/pet/listPet';
import { deletePet } from './useCases/pet/deletePet';
import { listPetById } from './useCases/pet/listPetById';
import { listPetByCategory } from './useCases/pet/listPetByCategory';
import { changePetInfo } from './useCases/pet/changePetInfo';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

export const router = Router();

router.get('/category', listCategory);

router.post('/category', createCategory);

router.delete('/category/:categoryId', deleteCategory);

router.get('/pet', listPet);

router.post('/pet', upload.single('image'), createPet);

router.get('/pet/:petId', listPetById);

router.get('/category/:categoryId/pet', listPetByCategory);

router.delete('/pet/:petId', deletePet);

router.patch('/pet/:petId', changePetInfo);
