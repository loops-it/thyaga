// routes/index.ts
import express, { Request, Response } from 'express';
import QuickQuestion from '../../models/QuickQuestion';

const router = express.Router();

// router.get('/', (req: Request, res: Response) => {
//     res.render('index');
// });

router.get('/', async (req: Request, res: Response) => {
    const questions  = await QuickQuestion.findAll({});
    res.render('index',{questions: questions});
});

export default router;
