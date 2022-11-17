import { Router } from "express";
import userRouter from "./userRouter";
import itemRouter from "./itemRouter";
import customRouter from "./customRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/item", itemRouter);
router.use("/custom", customRouter);

export default router;
