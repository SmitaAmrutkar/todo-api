
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT ||5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos',todoRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true})
.then(() =>{
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server port ${PORT}`));
})

.catch(err => console.error(err));

