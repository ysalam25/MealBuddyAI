// Example in a Node.js server
const express = require('express');
const axios = require('axios');
const app = express();



const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Set in your server's environment

app.post('/generate-recipe', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      req.body,
      { headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}` } }
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
