import { body, param } from 'express-validator'

export const produtoValidator = [
  body('name').isString().withMessage("Nome é obrigatório"),
  body('preco').isNumeric().withMessage("Preço é obrigatório"),
  body('descricao').isString().withMessage("Descrição é obrigatório"),
]

export const produtoUpdatedValidator =[
  param('id').isInt().withMessage("ID é obrigatório"),
  body('name').isString().withMessage("Nome é obrigatório"),
  body('preco').isNumeric().withMessage("Preço é obrigatório"),
  body('descricao').isString().withMessage("Descrição é obrigatório"),
]

export const produtoIdValidator =[
    param('id').isInt().withMessage("ID é obrigatório"),
  ]