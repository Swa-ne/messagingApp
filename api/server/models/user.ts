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

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name.'],
        unique: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name.'],
        unique: true,
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
        required: [true, 'Please enter your username.'],
        unique: true,
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

export const User = mongoose.model<UserSchemaInterface>("User", UserSchema)