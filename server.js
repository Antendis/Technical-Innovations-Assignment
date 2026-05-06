const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log ('MongoDB Connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('API is running')
});

const PORT = process.env.port || 5000;

app.get('/api/protected', authMiddleware, (req, res) => {

    res.json({
        message: 'Protected route accessed',
        user: req.user
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});