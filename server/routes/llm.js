import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/', async (req, res) => {
  const { prompt, model } = req.body;

  try {
    console.log('Received prompt:', prompt);
    console.log('Selected model (from frontend):', model);
    console.log('Sending request to Ollama server...');

    const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model || 'mistral:latest',
        prompt: prompt,
        stream: false
      })
    });

    const responseText = await ollamaResponse.text();
    console.log('Response from Ollama:', responseText);

    res.status(200).send(responseText);
  } catch (error) {
    console.error('LLM Error:', error);
    res.status(500).json({ error: 'Failed to generate response from LLM' });
  }
});

export default router;
