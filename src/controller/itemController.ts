import { Request, Response } from "express";
import { itemService } from "../service";

const getItemById = async (req: Request, res: Response) => {

    const { itemId } = req.params;

    const data = await itemService.getItemById(+itemId);

    if (!data) {
        return res.status(400).json({ "status" : 400, "success" : false, "message" : "NOT FOUND" });
    }   

    return res.status(200).json({ "status" : 200, "success" : true, "message" : "제품 상세뷰 조회 성공", data });


}

const itemController = {
    getItemById,
};

export default itemController;