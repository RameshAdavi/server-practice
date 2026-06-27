const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});

app.get('/about', (req, res) => {
  res.send('This is the about page. I built this server myself, for practice!');
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: 'Hello, ' + name + '!' });
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});
 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});