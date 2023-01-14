import { Schema } from 'mongoose';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import { FiList, FiPackage } from 'react-icons/fi'

import Layout from "../../components/Layout";
import RecipeDetail from "../../components/RecipeDetail";


export default function RecipeDetails() {
  const [isLoading, setLoading] = useState(false)
  const [recipeData, setRecipeData] = useState<any>()
  const router = useRouter()
  

  useEffect(() => {
    if(!router.isReady) return;
    
    setLoading(true)
    fetch(`/api/recipes/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(() => data)
        setLoading(false)
      })
  }, [router.isReady])


  return (
    <Layout>
      {isLoading &&
        <>
          <div className="flex justify-between">

            <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>


            <div className="inline-block w-fit h-fit p-1.5 border shadow-md bg-white shadow-slate-400 rounded-md transition-all ease-out hover:shadow-lg hover:shadow-slate-400 dark:shadow-none dark:border-none dark:bg-slate-700 dark:hover:shadow-none dark:hover:bg-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.85} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

            </div>


          </div>


          <div className='py-5 space-y-2'>
            <div className="h-4 w-24 rounded-sm inline-block bg-gray-300"/>
            <div className='w-4/5 h-20 tablet:h-12 tablet:w-[32rem] bg-gray-300 rounded-md'/>
          </div>

          <div className='flex my-1 space-x-5'>
            <div className="bg-gray-300 h-4 w-20 rounded-sm" />
            <div className="bg-gray-300 h-4 w-20 rounded-sm" />
          </div>

          <div className='flex my-4 space-x-5'>
            <div className="bg-gray-300 h-4 w-12 rounded-sm" />
          </div>

          <div className='my-8 '>

            <div className="flex flex-inline items-baseline justify-start space-x-3  text-gray-800 dark:text-gray-100" >
              <FiList className="inline-block h-6 w-6" />


              <h1 className="inline-block text-3xl font-bold">Ingredientes</h1>

            </div>

            <ul className='w-1/2 grid mt-4 text-gray-500 tablet:grid-cols-2 dark:text-gray-300 gap-3'>
              <div className='flex flex-col gap-3 columns-1'>
                <div className="h-4 w-16 bg-gray-300 rounded-sm"/>
                <div className="h-4 w-16 bg-gray-300 rounded-sm"/>
                <div className="h-4 w-16 bg-gray-300 rounded-sm"/>
              </div>
              <div className='flex flex-col gap-3 columns-1 '>
                <div className="h-4 w-16 bg-gray-300 rounded-sm"/>
                <div className="h-4 w-16 bg-gray-300 rounded-sm"/>
              </div>

            </ul>
          </div>

          <section className='space-y-4 mt-3'>
            <div className="flex space-x-3 items-baseline text-gray-800 dark:text-gray-100">
              <FiPackage className="h-6 w-6" />
              <h1 className="text-3xl font-bold ">Pasos</h1>

            </div>

            <div className="h-4 w-3/4 bg-gray-300 rounded-sm"/>
            <div className="h-4 w-3/4 bg-gray-300 rounded-sm"/>
            <div className="h-4 w-1/2 bg-gray-300 rounded-sm"/>
          </section>
        </>
      }

      {recipeData && <RecipeDetail recipe={recipeData.recipe} />}
    </Layout>
  )
}

