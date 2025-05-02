const express = require('express');
const router = express.Router();
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);



module.exports = router;
