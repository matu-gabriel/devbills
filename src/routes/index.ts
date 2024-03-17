import { Router } from "express";
import { baseRouter } from "./base-router";
import { categoryRoutes } from "./category-router";

export const router = Router()

router.use("/", baseRouter)
router.use("/categories", categoryRoutes)