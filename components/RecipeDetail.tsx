import Link from "next/link";
import { Schema } from "mongoose";
import { FiList, FiPackage } from 'react-icons/fi'
import { HiFire } from 'react-icons/hi2'


import icons from "../lib/Icons";
import { useRouter } from "next/router";
import Head from "next/head";

interface propsData {
  recipe: IRecipe
}

function RecipeDetail(props: propsData) {
  const recipe = props.recipe
  const category = recipe.category
  const CategoryIcon = icons[category.iconPath]
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{recipe.name}</title>
      </Head>
      <div className="visible print:hidden flex justify-between">
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
        <div className="flex items-center justify-start align-middle flex-inline">
          <CategoryIcon className="inline-block w-5 h-5 mr-1 text-blue-400" />
          <h2 className="inline-block text-blue-400 font-medium uppercase tracking-wider">{category.categoryName}</h2>
        </div>
        <h1 className='text-5xl font-bold transition-all ease-in-out delay-10 hover:text-[3.1rem] tracking-tight'>{recipe.name}</h1>
      </div>

      <div className='inline-flex flex-wrap items-center justify-center tablet:gap-5 w-full tablet:w-auto px-0 tablet:px-16 py-4  bg-white border rounded-lg dark:bg-slate-600'>
        <div className="flex flex-col items-center justify-center w-24 h-24 p-2 leading-tight text-center text-purple-400 scale-[85%] border-4 border-purple-400 rounded-full tablet:scale-100 ">
          <h2 className="text-4xl font-semibold font-subtitle ">{recipe.numServings}</h2>
          <h2 className="text-sm font-medium tracking-wider font-subtitle">Porciones</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-24 h-24 p-2 leading-tight text-center text-teal-400 scale-[85%] border-4 border-teal-400 rounded-full tablet:scale-100 ">
          <h2 className="text-4xl font-semibold font-subtitle">{recipe.cookTime}</h2>
          <h2 className="font-medium font-subtitle">min</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-24 h-24 p-2 leading-tight text-center text-red-400 scale-[85%] border-4 border-red-400 rounded-full tablet:scale-100 ">
          <HiFire className="w-10 h-10" />
          <h2 className="text-sm font-medium tracking-wide font-subtitle">{recipe.cookType}</h2>
        </div>
        
        
        
      </div>
      {/* <div className='flex items-center my-1 space-x-2 text-red-400'>
        <HiFire className="w-5 h-5" />
        <h2 className="font-medium tracking-wide uppercase font-subtitle">{recipe.cookType}</h2>
      </div> */}

      <div className='my-8 '>

        <div className="flex items-baseline justify-start space-x-3 text-gray-800 flex-inline dark:text-gray-100" >
          <FiList className="inline-block w-6 h-6" />


          <h1 className="inline-block text-3xl font-semibold font-header">Ingredientes</h1>

        </div>

        <ul className='grid w-1/2 mt-4 text-gray-700 tablet:grid-cols-2 dark:text-gray-300'>
          {recipe.ingredients.map((ingredient, i) => {
            return (
              <li key={i}>
                <div>
                  <h3 className=" font-subtitle text-2xl capitalize font-medium">{ingredient.name}</h3>
                  <span className="font-subtitle text-lg text-gray-500">{ingredient.amount}</span>
                </div>
              </li>
            )
          })}

        </ul>
      </div>

      <section className='mt-3 space-y-4'>
        <div className="flex items-baseline space-x-3 text-gray-800 dark:text-gray-100">
          <FiPackage className="w-6 h-6" />
          <h1 className="text-3xl font-semibold font-header">Pasos</h1>

        </div>

        <p className="font-subtitle leading-relaxed">{recipe.recipeSteps}</p>
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