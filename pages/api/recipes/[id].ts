import dbConnect from "../../../lib/mongots";
import type { NextApiRequest, NextApiResponse } from 'next'
import RecipeModel from "../../../models/recipe";
import { ObjectId } from "mongodb";
import mongoose, { } from "mongoose";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  console.log(id)
  try {
    await dbConnect();
    // const categories = CategoryModel;
    const result = await RecipeModel.aggregate(
      [
        
        { $match: { _id: new mongoose.Types.ObjectId(String(id)) } },
        {$lookup: {
          from: "categories",
           localField: "categoryId",
          foreignField: "_id",
          as: "category"
          }
        },
        {$unwind: '$category'}
      ]
    );
      const recipe= result[0]
    res.status(200).json({ recipe })
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}

