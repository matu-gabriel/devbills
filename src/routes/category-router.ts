import { Router } from "express";
import { CategoryController } from "../controllers/category-controller";

export const categoryRoutes = Router()

const controller = new CategoryController()

categoryRoutes.post("/", controller.create)