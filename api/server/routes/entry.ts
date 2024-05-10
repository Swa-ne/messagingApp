import express, { Express, Request, Response, Router } from "express"


import { registerUserController } from "../controllers/entry"

const router = Router()

router.post("/signup", registerUserController)

module.exports = router