import { Schema, Types } from "mongoose";
// Define Reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280, // Maximum 280 characters
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => timestamp.toISOString(), // Use ISO string format
    },
}, {
    toJSON: {
        getters: true, // Apply getters when converting to JSON
    },
    id: false, // Prevent Mongoose from creating an `id` field
});
export default reactionSchema;
