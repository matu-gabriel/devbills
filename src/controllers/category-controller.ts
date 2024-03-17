import { Request, Response } from "express";
import { CategoryService } from "../services/category-service";

export class CategoryController {
    async create(_: Request, res: Response) {
        const service = new CategoryService()

        const result = await service.create()

        return res.status(201).json(result)
    }
}