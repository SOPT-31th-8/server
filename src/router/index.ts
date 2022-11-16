import { Router } from "express";
import userRouter from "./userRouter";
import itemRouter from "./itemRouter";
import bestItemRouter from "./bestItemRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/item", itemRouter);
router.use("/best-item", bestItemRouter);

export default router;
