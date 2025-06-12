require('dotenv').config(); // ← Подключаем .env

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const askRouter = require('./routes/ask');

const app = express();

app.use(cors({
  origin: process.env.VITE_API_URL || '*', // ← Используем из .env
}));

app.use(morgan('combined'));
app.use(express.json());

app.use('/ask', askRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
