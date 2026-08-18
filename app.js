require('dotenv').config();
const express = require('express');
const app = express();
//const port = 3000;
const PORT = process.env.PORT || 3000;

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

// Add this to your app.js (from https://zero2claude.dev/lesson/7.6)
app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    res.json({ setup: joke.setup, punchline: joke.punchline });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});


app.listen(process.env.PORT, () => {
  //console.log(`Server running at http://localhost:${port}`);
  console.log('Server Running on Render ')});