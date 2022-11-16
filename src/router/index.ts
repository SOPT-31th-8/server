import { Router } from "express";
import userRouter from "./userRouter";
import itemRouter from "./itemRouter";
import bestRouter from "./bestRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/item", itemRouter);
router.use("/item", bestRouter);

export default router;
