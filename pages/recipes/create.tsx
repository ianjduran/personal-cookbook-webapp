import Layout from "../../components/Layout";
import Image from "next/image";
import React, { useState } from 'react'

import { MdAdd } from 'react-icons/md'

import CategoryForm from "../../components/CategoryForm";



// Todo: Fix Any Type
function CreateRecipe() {
  const [isCategoryFormOpen, setCategoryFormOpen] = useState(false)

  return (
    <Layout>

      <h1 className="text-3xl font-bold font-header "> Añade tu receta {'<'}3 </h1>
      <div className="mt-20 ">
        <div className="flex flex-col items-center content-center justify-center align-middle ">
          <div className="mb-4">
            <Image src={'/under-construction.svg'} alt={'Under Construction'} width={300} height={270} />
          </div>
          <h1 className="mt-4 text-2xl font-bold font-header">Oops! Esto aún se encuentra en construcción</h1>
          <p className="text-gray-500 font-subtitle ">Gracias por su paciencia =) {'<'}3</p>
        </div>

      </div>

      <button className='flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-blue-500 rounded-md font-subtitle hover:bg-slate-500/10 focus:border-blue-500'
        onClick={() => setCategoryFormOpen(!isCategoryFormOpen)} >

        <MdAdd className="inline" /> <span>Añadir Categoría </span>
      </button>

      {isCategoryFormOpen &&
        <div className="absolute inset-0 z-10 flex items-center justify-center max-w-xs py-4 pl-4 pr-16 mx-auto my-auto bg-white rounded-lg shadow dark:bg-slate-700 w-fit tablet:max-w-lg h-fit">
          <div className="flex flex-row flex-wrap items-start content-start justify-start gap-4 space-around md:flex-nowrap">
            <CategoryForm setClosed={setCategoryFormOpen} />

            <button onClick={() => setCategoryFormOpen(!isCategoryFormOpen)}
              className="absolute p-1 rounded-full top-4 right-4 hover:bg-slate-400/20 dark:hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>

          </div>
        </div>
      }

    </Layout>
  );
}


export default CreateRecipe;