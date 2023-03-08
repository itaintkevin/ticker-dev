import axios from 'axios'

const API_URL = 'http://localhost:5000/api/tasks/'

// Create a New Task
const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, taskData, config)

    return response.data;
}

// Fetch all Tasks
const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, config)

    return response.data;
}

const taskService = {
    createTask,
    getTasks,
}

export default taskService;