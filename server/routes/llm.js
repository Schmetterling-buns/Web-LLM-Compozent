


import express from 'express';
import fetch from 'node-fetch';
import { getChatHistory, addChatMessage, clearChatHistory } from '../utils/chatHistory.js';

const router = express.Router();




// POST /api/llm - send prompt, get response, and save to chat history
router.post('/', async (req, res) => {
  const { prompt, model, userId = 'default' } = req.body;
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

    let llmResponse = '';
    try {
      const responseJson = await ollamaResponse.json();
      llmResponse = responseJson.response || responseJson.message || JSON.stringify(responseJson);
    } catch (e) {
      llmResponse = await ollamaResponse.text();
    }
    // Save to chat history
    addChatMessage(userId, { prompt, response: llmResponse, timestamp: Date.now() });
    res.status(200).json({ response: llmResponse });
  } catch (error) {
    console.error('LLM Error:', error);
    res.status(500).json({ error: 'Failed to generate response from LLM' });
  }
});

// GET /api/llm/history?userId=... - get chat history
router.get('/history', (req, res) => {
  const userId = req.query.userId || 'default';
  const history = getChatHistory(userId);
  res.json({ history });
});

// DELETE /api/llm/history?userId=... - clear chat history
router.delete('/history', (req, res) => {
  const userId = req.query.userId || 'default';
  clearChatHistory(userId);
  res.json({ success: true });
});

export default router;
