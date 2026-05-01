const https = require('https');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key no configurada' }) };
  }

  try {
    const body = JSON.parse(event.body);
    const aiPrompt = body.prompt;

    const requestBody = JSON.stringify({
      contents: [{ parts: [{ text: aiPrompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
    });

    const response = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'generativelanguage.googleapis.com',
        path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(requestBody)
        }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, body: data }));
      });
      req.on('error', reject);
      req.write(requestBody);
      req.end();
    });

    if (response.status !== 200) {
      return { statusCode: response.status, body: JSON.stringify({ error: response.body }) };
    }

    const data = JSON.parse(response.body);
    const text = data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ result: text })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
