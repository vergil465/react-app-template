const dotenv = require('dotenv');

const express = require('express');
const path = require('path');

dotenv.config({
  path: './.env.production',
  safe: true,
});

const app = express();
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Frontend start on http://localhost:${PORT}`);
});
