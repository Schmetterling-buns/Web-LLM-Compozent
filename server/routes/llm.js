import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/', async (req, res) => {
  const { prompt } = req.body;

  try {
    const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        prompt: prompt,
        stream: false
      })
    });

    const data = await ollamaResponse.json();
    res.json({ response: data.response });
  } catch (error) {
    console.error('LLM Error:', error);
    res.status(500).json({ error: 'Failed to generate response from LLM' });
  }
});

export default router;
