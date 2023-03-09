const express = require('express');
const router = express.Router();
const {
    getSubTasks,
    createSubTask,
    updateSubTask,
    deleteSubTask
} = require('../controllers/subTaskController');

// Get Sub Tasks
router.get('/', getSubTasks);

// Create Sub Task
router.post('/', createSubTask);

// Update Sub Task
router.put('/:id', updateSubTask);

// Delete Sub Task
router.delete('/:id', deleteSubTask);

module.exports = router;