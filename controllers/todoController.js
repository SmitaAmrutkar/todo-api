const Todo = require('../models/todoModel');


// Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};


exports.getTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
  
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


// Create new todo
exports.createTodo = async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.status(201).json(todo);
};

// Update todo
exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
};


// Delete todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
};
