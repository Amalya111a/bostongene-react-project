const axios = require('axios');
const { openaiApiKey } = require('../config');

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-4'; // можно заменить на 'gpt-4' при наличии доступа

async function askQuestion(question) {
  if (!openaiApiKey) {
    throw new Error('OPENAI_API_KEY is not defined in environment variables');
  }

  const payload = {
    model: MODEL,
    messages: [
      { role: 'system', content: 'You are a helpful medical assistant.' },
      { role: 'user', content: question },
    ],
    temperature: 0.7,
  };

  try {
    const response = await axios.post(OPENAI_URL, payload, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const answer = response.data.choices?.[0]?.message?.content;
    if (!answer) throw new Error('No response from OpenAI');

    return answer;
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    throw 'AI is temporarily unavailable. Please try again later.';
  }
}

module.exports = { askQuestion };
