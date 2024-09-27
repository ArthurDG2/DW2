import { body, param } from 'express-validator'

export const fotoValidator = [
  body('title').isString().withMessage("titulo é obrigatório"),
  body('url').isString().withMessage("Preço é obrigatório"),
  body('produtoID').isNumeric().withMessage("Produto ID é obrigatório"),
]

export const fotoUpdatedValidator =[
  param('id').isInt().withMessage("ID é obrigatório"),
  body('title').isString().withMessage("titulo é obrigatório"),
  body('url').isString().withMessage("Preço é obrigatório"),
  body('produtoID').isNumeric().withMessage("Produto ID é obrigatório"),
]

export const fotoIdValidator =[
    param('id').isInt().withMessage("ID é obrigatório"),
  ]