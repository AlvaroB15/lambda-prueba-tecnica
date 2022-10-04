import { Schema, model } from "mongoose";
import { CreateCardDTO } from "./dto/createCardDTO";

const cardSchema = new Schema<CreateCardDTO>({
    card_number: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    expiration_month: {
        type: String,
        required: true,
    },
    expiration_year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // expireAt: {
    //     type: Date,
    //     default: Date.now
    // },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: "15m",
    },
    token: {
        type: String,
    },
});

cardSchema.path("expireAt").index({ expires: "15m" });

// Creando el modelo
export const Card = model<CreateCardDTO>("Card", cardSchema);