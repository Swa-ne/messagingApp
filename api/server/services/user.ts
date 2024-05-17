import { ActiveUsers } from "../models/user"

export async function getAllActiveUsers(userId: string) {
    try {
        const result = await ActiveUsers.find({ userId: { $ne: userId }, active: { $ne: "0" } })
        return result
    } catch {
        return "Internal server error"
    }
}