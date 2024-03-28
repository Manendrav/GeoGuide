const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// Routes
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(express.json());


function connectToMongoDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => { console.log('Successfully Connected to MongoDB!!!'); })
        .catch((error) => { console.log('Error connecting to MongoDB', error); });
}

connectToMongoDB();


app.use('/api/auth', userRoutes);


app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});