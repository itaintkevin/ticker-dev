const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subTaskSchema = new Schema({
    taskId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Task'
    },
    title: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('SubTask', subTaskSchema);