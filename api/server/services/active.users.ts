import { ActiveUsers } from "../models/user";

export async function ChangeUsersStatusToActive(userId: any | undefined, socketId: string) {
    try {
        const result = await ActiveUsers.updateOne({ userId }, { $set: { active: socketId } })
        if (result.matchedCount === 0) {
            console.log(`No document found for userId: ${userId} to set active`);
            return false
        } else if (result.modifiedCount === 0) {
            console.log(`Document was found for userId: ${userId} but not modified`);
            return false
        }
        console.log(`User with userId ${userId} set to Active`);
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
            console.log(`No document found for userId: ${userId} to set inactive`);
            return false
        } else if (result.modifiedCount === 0) {
            console.log(`Document was found for userId: ${userId} but not modified`);
            return false
        }
        console.log(`User with userId ${userId} set to inactive`);
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
            console.log(`User with userId ${userId} is active`);
            return true
        }
        console.log(`User with userId ${userId} is inactive`);
        return false
    } catch (error) {
        console.error('Error finding user status:', error);
        return false
    }
}
export async function GetAllActiveUsers() {
    try {
        const result = await ActiveUsers.find({ active: { $ne: "0" } })
        return result
    } catch (error) {
        console.error('Error finding user status:', error);
        return false
    }
}