import { Schema, model } from 'mongoose'

import { getRandomNumber } from '../../utils/functions'

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    username: { type: String, required: true, unique: true },
    isEmailVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
    pic: { type: String, default: `https://i.pravatar.cc/150?img=${getRandomNumber()}` },
    salt: String
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password
            delete ret.salt
        }
    },
    timestamps: true
})

const UserModel = model('User', UserSchema)
export default UserModel;