
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://frostc010123:uleteWFC6nJ6CMnN@cluster0.edffmpq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());


const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');


app.use('/api/posts', postRoutes);
app.use('/api/posts/:postId/comments', commentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


