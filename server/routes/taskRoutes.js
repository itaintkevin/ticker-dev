const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')
const { protect } = require('../middleware/authMiddleware')

// Get All Tasks
router.get('/', protect, getTasks)

// Get A Task
router.get('/:id', protect, getTask)

// Create A Task
router.post('/', protect, createTask)

// Delete A Task
router.delete('/:id', protect, deleteTask)

// Update A Task
router.put('/:id', protect, updateTask)

module.exports = router