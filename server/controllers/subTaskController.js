const SubTask = require('../models/subTaskModel');
const Task = require('../models/taskModel');
const mongoose = require('mongoose');

// get sub tasks
const getSubTasks = async (req, res) => {

}

// create sub task
const createSubTask = async (req, res) => {
    const { title } = req.body;
    const { taskId } = req.params;
    try {
        const subTask = await SubTask.create({ taskId, title });
        res.status(200).json(subTask);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// update sub task
const updateSubTask = async (req, res) => {
    
}

// delete sub task
const deleteSubTask = async (req, res) => {
    
}

module.exports = {
    getSubTasks,
    createSubTask,
    updateSubTask,
    deleteSubTask
}