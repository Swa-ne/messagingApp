import { Router } from "express"


import { authenticateToken } from "../middleware/authentication"
import { getAllActiveUsersController, getInboxController } from "../controllers/users"

const router = Router()

router.get("/getActiveUsers", authenticateToken, getAllActiveUsersController)
router.get("/get_inbox", authenticateToken, getInboxController)

export default router