const express = require('express');
const Joi = require('joi');
const { askQuestion } = require('../services/geminiService');

const router = express.Router();

const schema = Joi.object({
  question: Joi.string().min(3).required(),
});

router.post('/', async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const answer = await askQuestion(value.question);
    res.json({ answer });
  } catch (error) {
    console.error('Error in /ask route:', error);
    res.status(500).json({
      error: typeof error === 'string' ? error : 'Internal server error',
    });
  }
});

module.exports = router;
