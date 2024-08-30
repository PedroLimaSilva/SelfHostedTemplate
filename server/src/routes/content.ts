

import express, { Router } from 'express';

export const router: Router = express.Router();
// GET /api/content
router.get('/', async (req, res) => {
  res.send(/* await getContentFunction()*/);
});