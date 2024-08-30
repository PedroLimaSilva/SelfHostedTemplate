

import express, { Router } from 'express';

export const router: Router = express.Router();
// GET /api/cms
router.get('/', async (req, res) => {
  res.send(/* await getContentFunction()*/);
});