const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key no configurada' });

  try {
    const prompt = req.body && req.body.prompt;
    if (!prompt) return res.status(400).json({ error: 'No prompt' });

    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
    });

    const result = await new Promise((resolve, reject) => {
      const r = https.request({
        hostname: 'generativelanguage.googleapis.com',
        path: '/v1beta/models/gemini-1.5-flash:generateContent?key=' + API_KEY,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
      }, (response) => {
        let d = '';
        response.on('data', c => d += c);
        response.on('end', () => resolve({ status: response.statusCode, body: d }));
      });
      r.on('error', reject);
      r.write(body);
      r.end();
    });

    const data = JSON.parse(result.body);
    if (result.status !== 200) return res.status(result.status).json({ error: data });

    return res.status(200).json({ result: data.candidates[0].content.parts[0].text });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
