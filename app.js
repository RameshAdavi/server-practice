require('dotenv').config();
const express = require('express');
//const fetch = require('node-fetch'); // only if Node <18
const app = express();
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

app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    res.json({ setup: joke.setup, punchline: joke.punchline });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

//app.listen(PORT, () => {
//  console.log(`Server running on Render at port ${PORT}`);
//});

app.listen(PORT, () => {
  console.log(`Server bound to internal port ${PORT}. Public URL is handled by Render.`);
});
// Made changes on 19th Aug, 2026 to suit deployment on Render. Removed one PORT 