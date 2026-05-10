// v4 - using fetch
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  console.log('handler called');
  const API_KEY = process.env.GEMINI_API_KEY;
  console.log('API_KEY exists:', !!API_KEY);
  if (!API_KEY) return res.status(500).json({ error: 'API key no configurada' });

  try {
    const prompt = req.body && req.body.prompt;
    if (!prompt) return res.status(400).json({ error: 'No prompt' });

    console.log('calling gemini...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
        })
      }
    );

    console.log('gemini status:', response.status);
    const data = await response.json();

    if (!response.ok) {
      console.log('gemini error:', JSON.stringify(data));
      return res.status(response.status).json({ error: data });
    }

    const text = data.candidates[0].content.parts[0].text;
    console.log('success, text length:', text.length);
    return res.status(200).json({ result: text });

  } catch (err) {
    console.log('ERROR:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
