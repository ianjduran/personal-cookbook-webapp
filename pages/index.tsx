'use client';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import RecipeCard from '../components/Card'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'
import useSWR from 'swr'
import icons from '../lib/Icons';
import { useApp } from '../lib/useApp';
import { useEffect } from 'react';


const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then(res => res.json())


const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/categories', fetcher)
  const app = useApp()

  useEffect(() => {
    if (app && !app.currentUser) {
      const anonymousUser = Realm.Credentials.anonymous();
      app.logIn(anonymousUser);
    }
  }, [app, app?.currentUser, app?.currentUser?.id]);



  return (
    <div>
      <Head>
        <title> Recipes App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='justify-start space-y-4'>
          <h1 className='text-5xl font-bold'>Bienvenid@!!</h1>
          <p className='text-xl font-medium text-blue-400 font-subtitle'>Recetario Familiar con un sabor casero</p>

          <SearchBar />


          {/* Recetas */}

          <h2 className='text-3xl font-bold font-header'>Recetas</h2>

          <div className='flex flex-wrap mt-4 gap-y-4 place-content-around md:place-content-start md:gap-x-4'>

            <RecipeCard category='DESAYUNO'
              label='Tostadas Francesas'
              href='example' />

            <RecipeCard category='BEBIDA'
              label='Limonada'
              href='example' />

            <RecipeCard category='Masitas'
              label='Cuñape'
              href='example' />

            <RecipeCard category='Postre'
              label='Helado'
              href='example' />

            <RecipeCard category='Receta de la Abuela'
              label='Pudín'
              href='example' />

          </div>

          {/* Categorias */}
          <h2 className='text-3xl font-bold font-header'>Categorias</h2>

          
          
          <div className='flex flex-wrap gap-x-4 gap-y-2'>
            {error && <span className='text-lg text-red-500'>Ocurrio un error Inesperado</span>}
            {isLoading &&
              <div className="inline-flex flex-col items-center justify-center w-40 p-4 text-center transition ease-out bg-white border rounded-md shadow-md gap-y-2 shadow-slate-400 hover:shadow-lg hover:shadow-slate-400 dark:bg-slate-700 dark:border-none dark:shadow-none dark:hover:shadow-none dark:hover:bg-slate-600">
                <div className='w-24 h-4 rounded-md bg-slate-200' />
                {/* <p className='text-xs font-medium tracking-wider uppercase font-subtitle'>{_id}</p> */}
                <div className='w-8 h-8 rounded-full bg-slate-200' />
                <div className='w-24 h-4 rounded-md bg-slate-200' />
              </div>
            }
            {data &&
              data.allCategories.map(({ _id, categoryName, iconPath }: { _id: String, categoryName: String, iconPath: string }) => {
                const Icon = icons[iconPath] ?? Object.keys(icons)[0]
                return (
                  <div className="inline-flex  flex-col items-center justify-center w-40 p-4 text-center transition ease-out bg-white border rounded-md shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-400 dark:bg-slate-700 dark:border-none dark:shadow-none dark:hover:shadow-none dark:hover:bg-slate-600"
                    key={`category_${categoryName}`}>
                    <p className='text-xs font-medium tracking-wider uppercase font-subtitle'>Categoria</p>
                    <Icon className={'h-8 w-8'} />
                    <h2 className='inline-block font-medium text-md tablet:text-xl font-subtitle'>{categoryName}</h2>
                  </div>

                )
              })}
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-4'>
          <h1 className='font-medium transition-all ease-out hover:text-[1.05rem]'><span className='text-green-500'>DOING:</span> Crear Scheema y base de datos</h1>
          <h1 className='font-medium transition-all ease-out hover:text-[1.05rem]'><span className='text-green-500'>DOING:</span> Hacer Backend</h1>
          <h1 className='font-medium transition-all ease-out hover:text-[1.05rem]'>TO DO: Poblar coso con recetas</h1>
          <h1 className='font-medium transition-all ease-out hover:text-[1.05rem]'>TO DO: Fresearse con filtros y demás vainas</h1>
        </div>



      </Layout>
    </div>
  )


}

export default Home;





