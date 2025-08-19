import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    UserTable : defineTable({
        name : v.string(),
        imageUrl : v.string(),
        emai: v.string(),
        subscription : v.optional(v.string()),
        // ubscription : v.optional(v.string()),
    })
});