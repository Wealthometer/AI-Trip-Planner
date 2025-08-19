import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args : {
        name : v.string(),
        email : v.string(),
        imageUrl : v.string()
    },
    handler : async(ctx, agrs) => {
        const user = await ctx.db.query('UserTable').filter((q)=> q.eq );
    }
})