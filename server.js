// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

app.get('/api/liturgy', async (req, res) => {
  try {
    const response = await axios.get('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today');
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});