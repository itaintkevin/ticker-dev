const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const subTaskRoutes = require('./routes/subTaskRoutes');
require('colors');
require('dotenv').config();

// express app
const app = express();

// CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(`Route: ${req.path} | Request: ${req.method}`.bold.cyan);
    next();
})

// routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subTasks", subTaskRoutes);

// Serve client
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => 
        res.sendFile(
            path.resolve(__dirname, '../client/build/index.html')
        )
    ) 
} else {
    app.get('/', (req, res) => res.send('Please set Node Environment to Production.'))
}

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDB: Connected to Database.`.bold.underline.green);
        // listener
        const PORT = process.env.PORT;
        app.listen(5000, () => {
            console.log(`Server running on PORT ${PORT} in ${process.env.NODE_ENV} mode`.bold.underline.white)
        })
    })
    .catch((error) => {
        console.log(`${error}`.bold.red)
    })
