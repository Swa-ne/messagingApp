import mongoose, { Schema, Document } from 'mongoose';
import { UserSchemaInterface } from './user';

export interface MessageProps {
    message: string,
    sender: UserSchemaInterface,
    chatId: InboxSchemeInterface,
    isRead: boolean
}

export interface InboxSchemeInterface extends Document {
    userIds: UserSchemaInterface[],
    chatName?: string,
    profile?: string,
    isGroup: boolean,
    wasActive: boolean,
    lastMessage: MessageProps,
}


const MessageScheme: Schema = new Schema({
    message: {
        type: String,
        required: [true, 'Please enter Message.'],
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    chatId: {
        type: Schema.Types.ObjectId,
        ref: 'Inbox',
    },
    isRead: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
})

const InboxScheme: Schema = new Schema({
    userIds: [{
        type: Schema.Types.ObjectId,
        ref: 'ActiveUsers',
    }],
    chatName: {
        type: String,
        default: ""
    },
    profile: {
        type: String,
        default: "https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
    },
    isGroup: {
        type: Boolean,
        required: [true, 'Please enter if this group chat.'],
    },
    wasActive: {
        type: Boolean,
        default: false
    },
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    timestamps: true,
})

export const Message = mongoose.model<MessageProps>("Message", MessageScheme)
export const Inbox = mongoose.model<InboxSchemeInterface>("Inbox", InboxScheme)