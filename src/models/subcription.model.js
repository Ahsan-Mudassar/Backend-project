import mongoose from "mongoose"

const subscriptionSchema = new mongoose.Schema(
    {
        subscriber: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        channal: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)