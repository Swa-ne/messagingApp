import express, { Express, Request, Response, Router } from "express"


import { loginUserController, registerUserController } from "../controllers/entry"

const router = Router()

router.post("/login", loginUserController)
router.post("/signup", registerUserController)

export default router