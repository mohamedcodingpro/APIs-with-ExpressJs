const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

// POST route
app.post('/api/greet', (req, res) => {
  const { language, greeting } = req.body;
  res.json({ message: `Greeting in ${language}: ${greeting}` });
});

// GET route
app.get('/api/greet', (req, res) => {
  const { name, language } = req.query;
  res.json({ message: `Hello ${name}, greeting in ${language}` });
});

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

