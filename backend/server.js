// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/ask', async (req, res) => {
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: 'No user input provided' });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput,
        },
      ],
      max_tokens: 500,
    });

    const responseText = completion.data.choices[0].message.content;
    res.json({ result: responseText });
  } catch (error) {
    console.error('OpenAI API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch from OpenAI API' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
