import { body } from 'express-validator';

export const petValidate = [
  body('name')
    .isString()
    .not()
    .isEmpty()
    .withMessage('O nome do pet é obrigatório.')
    .isLength({min: 2})
    .withMessage('O nome do pet precisa ter no mínimo 2 caracteres.'),
  body('age')
    .isString()
    .not()
    .isEmpty()
    .withMessage('A idade do pet é obrigatória.')
    .isLength({min: 1})
    .withMessage('A idade precisa ter no mínimo 1 caractere.'),
  body('catOrDog')
    .isString()
    .not()
    .isEmpty()
    .withMessage('O tipo do seu pet é obrigatório (exemplo: gato ou cachorro).')
    .isLength({min: 2})
    .withMessage('O tipo do pet precisa ter no mínimo 2 caracteres.'),
  body('breed')
    .isString()
    .not()
    .isEmpty()
    .withMessage('A raça do pet é obrigatória!')
    .isLength({min: 2})
    .withMessage('A raça do pet precisa ser no mínimo 2 caracteres.'),
  body('owner')
    .isString()
    .not()
    .isEmpty()
    .withMessage('O nome do tutor do pet é obrigatório!')
    .isLength({min: 2})
    .withMessage('O nome do tutor precisa ter no mínimo 2 caracteres.'),
  body('ownerContact')
    .isString()
    .not()
    .isEmpty()
    .withMessage('O contato do tutor é obrigatório.')
    .isLength({min: 2})
    .withMessage('O contato do tutor é obrigatório.'),
];
