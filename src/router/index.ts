import { Router } from "express";
import userRouter from "./userRouter";
import itemRouter from "./itemRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/item", itemRouter);

export default router;
