import mongoose from 'mongoose'
const { Schema, model } = mongoose
const post = new Schema(
    {
        post: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        department: {
            type: String,
            trim: true,
            required: true,
        },
    },
    { timestamps: true },
)

const posts = model('posts', post)

export default posts
