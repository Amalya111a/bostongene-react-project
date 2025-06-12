require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const askRouter = require('./routes/ask');

const app = express();

app.use(cors()); 

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
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const { port } = require('./config');
// const askRouter = require('./routes/ask');

// const app = express();

// app.use(cors());
// app.use(morgan('combined'));
// app.use(express.json());

// app.use('/ask', askRouter);

// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//   console.error('Unhandled error:', err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });