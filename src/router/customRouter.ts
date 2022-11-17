import { Router } from 'express';
import { customController } from '../controller';

const router: Router = Router();

router.get("/", customController.getCustoms);

export default router;