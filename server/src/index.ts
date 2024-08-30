import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import path from 'path';
import { PORT } from './shared/env';
import { router as content } from './routes/content';

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// API resources
app.use(express.static('public'));

// API routes
app.use('/api/content', content);

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '../../client/dist')));

// All other routes should serve the frontend
app.get('/public/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', req.path));
});

// All other routes should serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});
