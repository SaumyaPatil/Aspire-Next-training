const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

// dynamic route using path parameters
app.get('/users/:id', (req, res) => {   //id -> variable | dynamic
  res.json({ id: req.params.id });
});

// dynamic route using query parameters
app.get('/search', (req, res) => {
  const { q, limit } = req.query; // /search?q=node&limit=10
  res.json({ query: q, limit });
});

app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

app.listen(3000, () => console.log('Server running on port 3000'));