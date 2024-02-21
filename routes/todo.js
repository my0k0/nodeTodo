const todoRouter = require('express').Router()
const {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoFormController,
  addTodoController,
  updateTodoController,
  deleteTodoController,
} = require('../controllers/todo')

todoRouter.get('/', homeController)

todoRouter.get('/add-todo', addTodoFormController)

todoRouter.get('/update-todo', updateTodoFormController)

todoRouter.get('/delete-todo', deleteTodoFormController)

todoRouter.post('/add-todo', addTodoController)

todoRouter.post('/update-todo/:id', updateTodoController)

todoRouter.get('/confirm-delete', deleteTodoController)

module.exports = todoRouter
