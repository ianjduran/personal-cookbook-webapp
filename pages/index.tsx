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


const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then(res => res.json())


const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/categories', fetcher)
  // console.log(data)
  // console.log('---------------')
  // console.log(error)
  // console.log('---------------')
  // console.log(isLoading)

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

          {/* Search BAR
          <form className="flex items-center ">
            <label className="sr-only">Search</label>
            <div className="relative w-full text-gray-300">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" ></path></svg>
              </div>
              <input type="text" id="recipe-search" className="transition ease-out hover:shadow-md border-2 border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Busca Tu receta preferida!" required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition ease-out hover:stroke-gray-500"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /> </svg>

              </button>
            </div>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Buscar
            </button>

          </form> */}



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

          {/* <div className="card dark:bg-slate-800">
          <Link href="/example">
            <h2>Receta de Prueba</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
            <p>Card 1</p>

          </Link>
        </div>
        */}

          {/* <Link href='/recipes'>
            <div className="inline-block p-5 mt-4 transition ease-out bg-white border rounded-md shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-400 dark:bg-slate-700 dark:border-none dark:shadow-none dark:hover:shadow-none dark:hover:bg-slate-600">
              <h2 className='block text-2xl font-semibold'>Diseño 2 Tarjeta</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
              </svg>
              <p className='w-max'>Card 2</p>
            </div>
          </Link> */}
          <div className='flex flex-wrap gap-x-4 gap-y-2'>
            {error && <span className='text-lg text-red-500'>Ocurrio un error Inesperado</span>}
            {isLoading &&
              <div className="inline-flex flex-col items-center justify-center w-40 p-4 text-center transition ease-out bg-white border rounded-md shadow-md gap-y-2 shadow-slate-400 hover:shadow-lg hover:shadow-slate-400 dark:bg-slate-700 dark:border-none dark:shadow-none dark:hover:shadow-none dark:hover:bg-slate-600">
              <div className='w-24 h-4 rounded-md bg-slate-200'/>
              {/* <p className='text-xs font-medium tracking-wider uppercase font-subtitle'>{_id}</p> */}
              <div className='w-8 h-8 rounded-full bg-slate-200'/>
              <div className='w-24 h-4 rounded-md bg-slate-200'/>
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





