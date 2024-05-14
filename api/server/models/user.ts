import mongoose, { Schema, Document } from 'mongoose';

export interface UserSchemaInterface extends Document {
    firstName: string,
    middleName: string,
    lastName: string,
    personalEmail: string,
    personalNumber: string,
    birthday: string,
    passwordHash: string,
    inbox: []
}

export interface ActiveUsersSchemeInterface extends Document {
    userId: string,
    active: string,
}

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name.'],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name.'],
    },
    personalEmail: {
        type: String,
        required: [true, 'Please enter your personal Email.'],
        unique: true,
    },
    personalNumber: {
        type: String,
        required: [true, 'Please enter your username.'],
        unique: true,
    },
    birthday: {
        type: String,
        required: [true, 'Please enter your birthday.'],
    },
    passwordHash: {
        type: String,
        required: [true, 'Please enter your password.'],
    },
    inbox: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Inbox',
            default: null,
        },
    ]
}, {
    timestamps: true,
});

const ActiveUsersScheme: Schema = new Schema({
    userId: {
        type: String,
        required: [true, 'Please enter userId.'],
        unique: true,
    },
    active: {
        type: String,
        required: [true, 'Please enter user status.'],
        default: "0"
    }
})

export const User = mongoose.model<UserSchemaInterface>("User", UserSchema)
export const ActiveUsers = mongoose.model<ActiveUsersSchemeInterface>("ActiveUsers", ActiveUsersScheme)