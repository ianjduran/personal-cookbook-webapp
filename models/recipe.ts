// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

import mongoose, { models, model, Schema } from 'mongoose';

interface IRecipe {
    name: string;
    categoryId: Schema.Types.ObjectId;
    numServings: number;
    cookTime: number; // mins
    cookType: string;
    ingredients: [{
        name: string,
        amount: string, // Qty + unit
    }];
    recipeSteps: string;
}


const RecipeSchema = new Schema<IRecipe>({

    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    numServings: {
        type: Number,
        required: true
    },
    cookTime: { // mins
        type: Number,
        required: true
    },
    cookType: {
        type: String,
        required: true
    },
    ingredients: {
        name: String,
        amount: Number,
        unit: String,
        required: true
    },
    recipeSteps: {
        type: String,
        required: true
    },

}, { timestamps: true })

const RecipeModel = models.Recipe as mongoose.Model<IRecipe> || model<IRecipe>('Recipe', RecipeSchema);

export default RecipeModel;