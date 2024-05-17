import { Router } from "express"


import { authenticateToken } from "../middleware/authentication"
import { getAllActiveUsersController } from "../controllers/users"

const router = Router()

router.get("/getActiveUsers", authenticateToken, getAllActiveUsersController)

export default router