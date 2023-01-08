import mongoose, { models, model, Schema } from 'mongoose';

interface ICategory {
  categoryName: string;
  iconPath: string;
}

const CategorySchema = new Schema<ICategory>({
  categoryName: {
    type: String,
    required: true
  },
  iconPath: {
    type: String,
    required: true
  },
});

const CategoryModel = models.Category as mongoose.Model<ICategory> || model<ICategory>('Category', CategorySchema);

export default CategoryModel