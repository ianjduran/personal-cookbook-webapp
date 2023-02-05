
import {Schema}  from 'mongoose'

export type  Ingredient = {
    name: String,
    amount: String,
}

export type Recipe = {
    name: string;
    category: Category;
    numServings: number;
    cookTime: number; // mins
    cookType: string;
    ingredients: [Ingredient];// Qty + unit
    recipeSteps: string;
}

export type Category = {
    categoryName: string;
    iconPath: string;
    color: string
  }