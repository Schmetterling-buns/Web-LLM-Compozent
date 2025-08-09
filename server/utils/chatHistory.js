// Simple file-based chat history utility for persistence
import fs from 'fs';
const CHAT_HISTORY_FILE = './chat_history.json';

export function getChatHistory(userId) {
  try {
    if (!fs.existsSync(CHAT_HISTORY_FILE)) return [];
    const data = JSON.parse(fs.readFileSync(CHAT_HISTORY_FILE, 'utf-8'));
    return data[userId] || [];
  } catch (e) {
    return [];
  }
}

export function addChatMessage(userId, message) {
  let data = {};
  if (fs.existsSync(CHAT_HISTORY_FILE)) {
    data = JSON.parse(fs.readFileSync(CHAT_HISTORY_FILE, 'utf-8'));
  }
  if (!data[userId]) data[userId] = [];
  data[userId].push(message);
  fs.writeFileSync(CHAT_HISTORY_FILE, JSON.stringify(data));
}

export function clearChatHistory(userId) {
  if (!fs.existsSync(CHAT_HISTORY_FILE)) return;
  const data = JSON.parse(fs.readFileSync(CHAT_HISTORY_FILE, 'utf-8'));
  delete data[userId];
  fs.writeFileSync(CHAT_HISTORY_FILE, JSON.stringify(data));
}
