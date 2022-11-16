import { Router } from 'express';
import { itemController } from '../controller';
import { bestController } from '../controller';

const router: Router = Router();

router.get("/:itemId", itemController.getItemById);
router.get("/best", bestController.getBests);

export default router;