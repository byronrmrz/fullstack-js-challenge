const express = require('express');
const app = express();
const cors = require('cors');
const postRoutes = require('./routes/posts.routes');

app.use(cors());
app.use(express.json());
app.get('/ping', (req, res) => res.send('pong'));
app.use('/api/posts', postRoutes);

module.exports = app;