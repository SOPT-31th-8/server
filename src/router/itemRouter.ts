import { Router } from 'express';
import { itemController } from '../controller';

const router: Router = Router();

router.get("/:itemId", itemController.getItemById);

export default router;