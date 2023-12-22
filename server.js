// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

const allowedOrigins = ['http://localhost:3000', 'https://liturgy-checklist.vercel.app'];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed, or if it's a same-origin request (null)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(express.json());

app.get('/api/liturgy', async (req, res) => {
  try {
    const response = await axios.get('https://calapi.inadiutorium.cz/api/v0/en/calendars/default/today', { withCredentials: true });
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.message);
    console.error('Axios response data:', error.response?.data);
    console.error('Axios response status:', error.response?.status);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});