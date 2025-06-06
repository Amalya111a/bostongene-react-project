const axios = require('axios');
const { geminiApiKey } = require('../config');

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;

async function askQuestion(question) {
  if (!geminiApiKey) {
    throw new Error('GEMINI_API_KEY is not defined in environment variables');
  }

  const url = `${GEMINI_URL}?key=${geminiApiKey}`;
  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(url, payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      throw new Error('No answer returned from Gemini API');
    }

    return answer;
  } catch (error) {
    throw error.response?.data || error;
  }
}

module.exports = {
  askQuestion,
};
