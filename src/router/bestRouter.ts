import { Router } from 'express';
import { bestController } from '../controller';

const router: Router = Router();

router.get("/best", bestController.getBests);

export default router;