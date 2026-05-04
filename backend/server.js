const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// DB connection using env vars
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db-service',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'my-secret-pw',
  database: 'demo'
});

// Route for health check
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Route to fetch users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('DB error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

