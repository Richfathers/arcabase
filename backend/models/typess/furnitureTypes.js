import mongoose from 'mongoose'
const { Schema, model } = mongoose
const furnitureTypeSchema = new Schema(
    {
        type: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const furnitureType = model('furniture-type', furnitureTypeSchema)

export default furnitureType
