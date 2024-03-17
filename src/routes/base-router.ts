import { Router } from "express";
import packageJson from "../../package.json"

export const baseRouter = Router()

baseRouter.get("/", (_, res) => {
    const { name, author, description, version } = packageJson

    return res.status(200).json({ name, author, description, version })
})