import Layout from "../../components/Layout";
import React, { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { MdAdd } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import CategoryForm from "../../components/CategoryForm";
import CategoryPicker from "../../components/CategoryPicker";
import dbConnect from "../../lib/mongots";
import CategoryModel from "../../models/category";

export const getStaticProps: GetStaticProps = async (context) => {
  await dbConnect();
  const categories: typeof CategoryModel[] = await CategoryModel.find({});
  const allCategories = JSON.stringify(categories);
  return {
    props: {
      allCategories,
    },
    revalidate: 5,
  };
};

// Todo: Fix Any Type
function CreateRecipe(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isCategoryFormOpen, setCategoryFormOpen] = useState(false);
  const categoryData = JSON.parse(props.allCategories);
  return (
    <Layout>
      <h1 className="text-3xl font-bold font-header ">
        {" "}
        Añade tu receta {"<"}3{" "}
      </h1>

      <form action="" className="mt-4 ">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col md:w-96">
            <label className="inline-block text-lg font-bold text-gray-700 font-header">
              {" "}
              Nombre{" "}
            </label>
            <textarea
              autoFocus
              className="shadow-md items-start h-20 px-2 py-1 border rounded-md resize-none text-start"
              placeholder="ej. Tostadas Francesas"
            />
          </div>
          <div>
            <label className="text-2xl font-bold text-gray-700 font-header">
              {" "}
              Categoría{" "}
            </label>
            <CategoryPicker data={categoryData} />

            {/* Category Form Open */}
            <button
              className="transition-transform ease-out active:scale-[97%] flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-blue-500 rounded-md font-subtitle hover:bg-slate-500/10 focus:border-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setCategoryFormOpen(!isCategoryFormOpen);
              }}
            >
              <MdAdd className="inline" /> <span>Añadir Categoría </span>
            </button>
          </div>

          <div className="flex flex-col">
            <label className="inline-block text-lg font-bold text-gray-700 font-header">
              {" "}
              Porciones{" "}
            </label>
            <input
              className="border rounded-md shadow-md inline-block w-20 p-1 text-center "
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-700  font-header">
              {" "}
              Tiempo de elaboración{" "}
            </label>
            <input
              className="border rounded-md shadow-md inline-block w-20 p-1 text-center"
              placeholder="mins"
              type="number"
            />
          </div>

          <div className="flex flex-col w-72">
            <label className="text-lg font-bold text-gray-700 font-header ">
              {" "}
              Modo de Elaboracion{" "}
            </label>
            <input
              className="px-4 py-1 shadow-md border rounded-md"
              type="text"
              placeholder="ej. Horno"
            />
          </div>

          <div className="flex flex-col w-72">
            <label className="text-lg font-bold text-gray-700 font-header">
              {" "}
              Ingredientes{" "}
            </label>
            <input
              className="px-4 py-1 shadow-md border rounded-md"
              type="text"
              placeholder="ej. Arroz, Cebolla, Etc"
            />
          </div>

          <div className="flex flex-col w-full self-stretch lg:col-span-2 md:w-3/4">
            <label className="text-lg font-bold text-gray-700 font-header">
              {" "}
              Pasos{" "}
            </label>
            <textarea
              className="resize-none border shadow-md rounded-lg px-2 py-1"
              placeholder="Ingresa los pasos"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
        </div>

        <button className="mt-5 text-teal-500 font-bold text-lg group active:scale-[98%]">
          <BiSave className="inline h-6 w-6" />
          <span className="ml-2">Guardar Receta</span>
          <div className="transition-all ease-out group-hover:w-full w-0 h-[3px] bg-teal-500" />
        </button>
      </form>

      {isCategoryFormOpen && (
        <div className="absolute inset-0 z-10 flex items-center justify-center max-w-xs py-4 pl-4 pr-16 mx-auto my-auto bg-white rounded-lg shadow dark:bg-slate-700 w-fit tablet:max-w-lg h-fit">
          <div className="flex flex-row flex-wrap items-start content-start justify-start gap-4 space-around md:flex-nowrap">
            <CategoryForm setClosed={setCategoryFormOpen} />

            <button
              onClick={() => setCategoryFormOpen(!isCategoryFormOpen)}
              className="absolute p-1 rounded-full top-4 right-4 hover:bg-slate-400/20 dark:hover:brightness-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CreateRecipe;

{
  /* <div className="mt-20 ">
  <div className="flex flex-col items-center content-center justify-center align-middle ">
    <div className="mb-4">
      <Image src={'/under-construction.svg'} alt={'Under Construction'} width={300} height={270} />
    </div>
    <h1 className="mt-4 text-2xl font-bold font-header">Oops! Esto aún se encuentra en construcción</h1>
    <p className="text-gray-500 font-subtitle ">Gracias por su paciencia =) {'<'}3</p>
  </div>

</div> */
}
