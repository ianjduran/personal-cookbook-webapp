import Link from "next/link";
import { Schema } from "mongoose";
import {FiList, FiPackage} from 'react-icons/fi'


import icons from "../lib/Icons";
import { useRouter } from "next/router";

interface propsData{
  recipe: IRecipe
}

function RecipeDetail(props: propsData) {
  const recipe = props.recipe
  const category = recipe.category
  const CategoryIcon = icons[category.iconPath]
  const router = useRouter()

  return (
    <>
      <div className="flex justify-between">
        <button type='button' onClick={() => router.back()}>

          <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          
        </button>
        <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.85} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

        </div>


      </div>


      <div className='py-5 space-y-2'>
        <div className="flex flex-inline items-center justify-start align-middle">
          <CategoryIcon className="h-5 w-5 inline-block text-blue-400 mr-1" />
          <h2 className="inline-block font-['Kanit'] text-blue-400 font-medium uppercase tracking-wider">{category.categoryName}</h2>
        </div>
        <h1 className='text-5xl font-bold transition-all ease-in-out delay-10 hover:text-[3.1rem]'>{recipe.name}</h1>
      </div>

      <div className='flex my-1 space-x-5'>
        <h2 className="text-purple-400 font-subtitle">{recipe.numServings} Porciones</h2>
        <h2 className="text-teal-400 font-subtitle">{recipe.cookTime} min</h2>
      </div>

      <div className='flex my-1 space-x-5'>
        <h2 className="text-red-400 font-subtitle">{recipe.cookType}</h2>
      </div>

      <div className='my-8 '>

        <div className="flex flex-inline items-baseline justify-start space-x-3  text-gray-800 dark:text-gray-100" >
          <FiList className="inline-block h-6 w-6" />


          <h1 className="inline-block text-3xl font-bold">Ingredientes</h1>

        </div>

        <ul className='w-1/2 grid mt-4 text-gray-500 tablet:grid-cols-2 dark:text-gray-300'>
          {recipe.ingredients.map((ingredient,i)=>{
            return (
              <li key={i}>
                <div>
                  <span className="capitalize">{ingredient.name}</span> - <span>{ingredient.amount}</span>
                </div>
              </li>
            )
          })}
          
        </ul>
      </div>

      <section className='space-y-4 mt-3'>
        <div className="flex space-x-3 items-baseline text-gray-800 dark:text-gray-100">
          <FiPackage className="h-6 w-6"/>
          <h1 className="text-3xl font-bold ">Pasos</h1>

        </div>

        <p>{recipe.recipeSteps}</p>
      </section>
    </>
  );
}



export default RecipeDetail;


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
  category: {
    categoryName: string,
    iconPath: string
  }
}