import Link from "next/link";
import Image from "next/image";
import { MdAdd } from 'react-icons/md'
import useSWR from 'swr'

// import { useApp } from "../../lib/useApp";

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/Card";

const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then(res => res.json())


function RecipeListPage() {
  const { data, error, isLoading } = useSWR('/api/recipes', fetcher)

  if (error) return <p>aiiuda</p>
  if (isLoading) return (
    <Layout>
      <h1 className="text-3xl font-bold font-header "> Recetas </h1>
      {isLoading &&
        <div className="flex flex-wrap mt-4 gap-4 md:gap-x-4">
          <div className={`relative py-2 px-2 pb-4 bg-gray-300 border inline-block h-40 w-[calc(50%_-_1rem)] rounded-md max-w-[20rem]`} />
          <div className={`relative py-2 px-2 pb-4 bg-gray-300 border inline-block h-40 w-[calc(50%_-_1rem)] rounded-md max-w-[20rem]`} />
          <div className={`relative py-2 px-2 pb-4 bg-gray-300 border inline-block h-40 w-[calc(50%_-_1rem)] rounded-md max-w-[20rem]`} />
        </div>
      }
    </Layout>
  )

  if (data?.length < 1) return (

    <>
      <div className="mt-20 ">
        <div className="flex flex-col items-center content-center justify-center align-middle ">
          <div className="mb-4">
            <Image src={'/empty-recipe-list.svg'} alt={'Empty Recipe List Illustration'} width={300} height={300} />
          </div>
          <h1 className="text-2xl font-bold font-header">Aun no existen recetas!</h1>
          <p className="text-gray-500 font-subtitle ">Empecemos a recolectarlas!</p>

        </div>

      </div>

      <div className="flex flex-col items-center content-center justify-center align-middle">
        <button className='mt-8 flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-green-500 rounded-md font-subtitle hover:bg-slate-500/10'>
          <Link href="/recipes/create">
            <MdAdd className="inline" /> <span>Crear Receta</span>
          </Link>
        </button>
      </div>
    </>
  )

  return (
    <Layout>

      <h1 className="text-3xl font-bold font-header "> Recetas </h1>

      {data &&
        <div>
          <div className="flex flex-wrap mt-4 gap-4 place-content-start md:gap-x-4">
            {data.allRecipes &&
              data.allRecipes.map((recipe: any, i: number) => {
                console.log(recipe)
                return (
                  <RecipeCard
                    key={i}
                    label={recipe.name}
                    category={String(recipe.category.categoryName)}
                    href={`/recipes/${recipe._id}`}
                  />
                )
              })
            }
          </div>
          
        </div>
        
      }
      <div className="flex flex-col items-center content-center justify-center align-middle">
        <button className='mt-8 flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-green-500 rounded-md font-subtitle hover:bg-slate-500/10'>
          <Link href="/recipes/create">
            <MdAdd className="inline" /> <span>Crear Receta</span>
          </Link>
        </button>
      </div>
    </Layout>
  );
}

export default RecipeListPage;