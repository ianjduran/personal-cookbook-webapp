import Link from "next/link";
import Image from "next/image";
import { MdAdd } from 'react-icons/md'


import RecipeModel from "../../models/recipe";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/Card";


function RecipeListPage() {
  const [recipes, setRecipes] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    
    const getRecipes = async () => {
      const REALM_APP_ID = String(process.env.NEXT_PUBLIC_REALM_APP_ID)
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials)
        const allRecipes = await user.functions.getAllRecipes()
        setRecipes(() => allRecipes)
        setIsLoading(false)
      } catch (error) {
        console.log("Hubo un error", error)
      }
    }

    getRecipes();
  }, [])

  return (
    <Layout>

      <h1 className="text-3xl font-bold font-header "> Recetas </h1>
      {isLoading &&
        <p>Fetching Data</p>
      }
      {recipes ?
        <div>
          <div className="flex mt-4 gap-4">
            {recipes &&
              recipes.map((recipe, i) => {
                console.log(recipe)
                return (
                  <RecipeCard
                    key={i}
                    label={recipe.name}
                    category={String(recipe.categoryId)}
                    href={`/recipes/${recipe._id}`}
                  />
                )
              })

            }
          </div>
          <div className="flex flex-col items-center content-center justify-center align-middle">
            <button className='mt-8 flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-green-500 rounded-md font-subtitle hover:bg-slate-500/10'>
              <Link href="/recipes/create">
                <MdAdd className="inline" /> <span>Crear Receta</span>
              </Link>
            </button>
          </div>
        </div>
        :
        <div className="mt-20 ">
          <div className="flex flex-col items-center content-center justify-center align-middle ">
            <div className="mb-4">
              <Image src={'/empty-recipe-list.svg'} alt={'Empty Recipe List Illustration'} width={300} height={300} />
            </div>
            <h1 className="text-2xl font-bold font-header">Aun no existen recetas!</h1>
            <p className="text-gray-500 font-subtitle ">Empecemos a recolectarlas!</p>
            <Link href="/recipes/create">
              <button className='mt-8 flex align-middle justify-center items-center px-2 py-1 text-lg font-medium text-green-500 rounded-md font-subtitle hover:bg-slate-500/10'>

                <MdAdd className="inline" /> <span>Crear Receta</span>

              </button>
            </Link>
          </div>

        </div>
      }



    </Layout>
  );
}

export default RecipeListPage;