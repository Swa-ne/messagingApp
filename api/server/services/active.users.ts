import { ActiveUsers } from "../models/user";

export async function ChangeUsersStatusToActive(userId: any | undefined, socketId: string) {
    try {
        const result = await ActiveUsers.updateOne({ userId }, { $set: { active: socketId } })
        if (result.matchedCount === 0) {
            return false
        } else if (result.modifiedCount === 0) {
            return false
        }
        return true
    } catch (error) {
        console.error('Error updating user status on disconnect:', error);
        return false
    }
}
export async function ChangeUsersStatusToInactive(userId: any) {
    try {
        const result = await ActiveUsers.updateOne({ userId }, { $set: { active: 0 } })
        if (result.matchedCount === 0) {
            return false
        } else if (result.modifiedCount === 0) {
            return false
        }
        return true
    } catch (error) {
        console.error('Error updating user status on disconnect:', error);
        return false
    }
}
export async function CheckUserStatusIfActive(userId: any) {
    try {
        const result = await ActiveUsers.findOne({ userId })
        if (result?.active !== "0") {
            return true
        }
        return false
    } catch (error) {
        console.error('Error finding user status:', error);
        return false
    }
}
export async function GetSocketId(userId: any) {
    try {
        const result = await ActiveUsers.findOne({ userId })
        if (!result) {
            return false
        }
        if (result.active === "0") {
            return false
        }
        return result.active
    } catch (error) {
        console.error('Error finding user status:', error);
        return false
    }
}