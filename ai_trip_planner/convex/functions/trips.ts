import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

// Get all trips
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("TripDetailTable").collect();
  },
});

// Add a trip
export const add = mutation({
  args: {
    tripId: v.string(),
    tripDetail: v.any(),
    uid: v.id("UserTable"), // foreign key to a user
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("TripDetailTable", args);
  },
});
