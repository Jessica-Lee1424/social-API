import mongoose, { Schema } from "mongoose";

const reactionSchema = new Schema({
  reactionBody: { type: String, required: true, maxlength: 280 }, // Optional: Limit to 280 characters
  username: { type: String, required: true },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: (createdAt: Date) => createdAt.toISOString() // Format the timestamp on query
  },
});

// Define the thought schema
const thoughtSchema = new Schema({
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1, // Minimum length of 1 character
    maxlength: 280 // Maximum length of 280 characters
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: (createdAt: Date) => createdAt.toISOString() // Format the timestamp on query
  },
  username: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  reactions: [reactionSchema], // Use the reaction schema for reactions
});

// Apply the getters to the schema
thoughtSchema.set('toJSON', { getters: true });
thoughtSchema.set('toObject', { getters: true });

export default mongoose.model("Thought", thoughtSchema);