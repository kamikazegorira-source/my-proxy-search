const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
  const url = req.query.url; // 例: http://localhost:3000/?url=https://example.com
  if (!url) return res.send("URLを指定してください");
  request(url).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy running on http://localhost:3000');
});