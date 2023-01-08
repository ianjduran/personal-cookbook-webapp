import Link from "next/link";
import { Schema } from "mongoose";

function RecipeDetail({recipe}: {recipe : IRecipe}) {
  console.log(recipe)
  return (
    <>
      <div className="flex justify-between">
        <Link href='/'>

          <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          {/* <span className="px-5 py-2 font-medium text-blue-500 transition-all ease-out border border-blue-500 rounded-full hover:text-white hover:bg-blue-500">
  &larr; Go Back
</span> */}
        </Link>
        <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.85} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

        </div>


      </div>


      <div className='py-5 space-y-2'>
        <h2 className="font-['Kanit'] text-blue-400">{String(recipe.categoryId)}</h2>
        <h1 className='text-5xl font-bold transition-all ease-in-out delay-10 hover:text-[3.1rem]'>{recipe.name}</h1>
      </div>

      <div className='flex my-1 space-x-5'>
        <h2 className="text-purple-400 font-subtitle">{recipe.numServings} Servings</h2>
        <h2 className="text-teal-400 font-subtitle">{recipe.cookTime} min</h2>
        <h2 className="text-red-400 font-subtitle">Dulce</h2>
      </div>

      <div className='flex my-1 space-x-5'>
        <h2 className="text-blue-400 font-subtitle">{recipe.cookType}</h2>
      </div>

      <div className='my-8  '>

        <div className="flex space-x-3 items-center text-gray-800 dark:text-gray-100" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>


          <h1 className="text-3xl font-bold ">Ingredientes</h1>

        </div>

        <ul className='w-1/2 grid my-2 text-gray-500 tablet:grid-cols-2 dark:text-gray-300'>
          <div className="column">
            <li>Ingrediente 1</li>
            <li>Ingrediente 2</li>
            <li>Ingrediente 3</li>
          </div>
          <div className="column">
            <li>Ingrediente 4</li>
            <li>Ingrediente 1</li>
          </div>
        </ul>
      </div>

      <section className='space-y-5 mt-3'>
        <div className="flex space-x-3 items-center text-gray-800 dark:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
          <h1 className="text-3xl font-bold ">Pasos</h1>

        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ipsum quo accusantium sunt, quod ab eveniet corrupti doloribus deleniti modi provident cupiditate, voluptatum, optio omnis minima tenetur aliquam suscipit. Vitae.
          Ea tenetur itaque harum maiores tempora commodi dicta porro suscipit eum aut, maxime cupiditate doloribus, corrupti voluptates vero pariatur dignissimos eaque at repellendus. Dolore magnam quae at? Omnis, perspiciatis voluptatum.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ipsum quo accusantium sunt, quod ab eveniet corrupti doloribus deleniti modi provident cupiditate, voluptatum, optio omnis minima tenetur aliquam suscipit. Vitae.
          Ea tenetur itaque harum maiores tempora commodi dicta porro suscipit eum aut, maxime cupiditate doloribus, corrupti voluptates vero pariatur dignissimos eaque at repellendus. Dolore magnam quae at? Omnis, perspiciatis voluptatum.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ipsum quo accusantium sunt, quod ab eveniet corrupti doloribus deleniti modi provident cupiditate, voluptatum, optio omnis minima tenetur aliquam suscipit. Vitae.
          Ea tenetur itaque harum maiores tempora commodi dicta porro suscipit eum aut, maxime cupiditate doloribus, corrupti voluptates vero pariatur dignissimos eaque at repellendus. Dolore magnam quae at? Omnis, perspiciatis voluptatum.
        </p>
      </section>
    </>
  );
}

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


export default RecipeDetail;