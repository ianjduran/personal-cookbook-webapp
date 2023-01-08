import dbConnect from "../../lib/mongots";
import type { NextApiRequest, NextApiResponse } from 'next'
import CategoryModel from "../../models/category";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try{
        await dbConnect();
        const categories = CategoryModel;
        const allCategories = await CategoryModel.find({});

        res.status(200).json({ allCategories })
    } catch (err){
        console.log(err);
        res.status(500).json({error: err});
    }
  }

// export default async function getAllCategories(){
//   await dbConnect();
//   const categories = CategoryModel;
//   const allCategories = await CategoryModel.find({});
//   console.log(allCategories)
//   console.log("--------------")
//   return {
//     allCategories
//   }
  
// }