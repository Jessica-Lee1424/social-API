import mongoose, { Schema } from "mongoose";

const thoughtSchema = new Schema({
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1, 
    maxlength: 280 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: (createdAt: Date) => createdAt.toISOString(), // Format the timestamp on query
  },
  username: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  reactions: [
    {
      reactionBody: { type: String, required: true, maxlength: 280 },
      username: { type: String, required: true },
      createdAt: { 
        type: Date, 
        default: Date.now,
        get: (timestamp: Date) => timestamp.toISOString(), // Format the timestamp on query
      },
    },
  ],
});

// Create a virtual property called reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length; // Return the length of the reactions array
});

// Apply the getters to the schema
thoughtSchema.set('toJSON', { getters: true, virtuals: true }); // Include virtuals in JSON output
thoughtSchema.set('toObject', { getters: true, virtuals: true }); // Include virtuals in object output

export default mongoose.model("Thought", thoughtSchema);