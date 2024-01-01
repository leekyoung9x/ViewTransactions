const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api', async (req, res) => {
  try {
    const apiUrl = 'https://api.web2m.com/historyapimb/Tuanbeo@12345/02147019062000/F3CAC210-DAC1-BD7F-7A26-A2643A5B3DD7';
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
