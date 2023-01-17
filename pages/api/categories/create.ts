import dbConnect from "../../../lib/mongots";
import type { NextApiRequest, NextApiResponse } from 'next'
import CategoryModel from "../../../models/category";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("CREATE NEW CATEGORY")
  try {
    console.log(req.query)
    await dbConnect();
    const body = JSON.parse(req.body)
    console.log(body)

    const category = new CategoryModel({
      categoryName: body.categoryName,
      iconPath: body.iconPath,
      color: body.color
    });

    console.log(category)
    await category.save()

    res.status(200).json(category)
  } catch (err) {
    console.log(err);
    res.status(500)
  }
}
