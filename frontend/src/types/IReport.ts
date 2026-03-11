import type { ObjectId } from "mongoose";
import type { categoryTypes, urgencyTypes } from "./CriteriaType";

export interface IReport {
    _id: ObjectId,
    category: categoryTypes,
    urgency: urgencyTypes,
    message: string,
    imagePath: string,
    sourceType: string,
    createdAt: Date
}