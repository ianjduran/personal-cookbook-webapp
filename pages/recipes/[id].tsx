import { Schema } from 'mongoose';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import useSWR from 'swr'

import Layout from "../../components/Layout";
import RecipeDetail from "../../components/RecipeDetail";


export default function RecipeDetails() {
  const [isLoading, setLoading] = useState(false)
  const [recipeData, setRecipeData] = useState<any>()
  const { query } = useRouter()


  useEffect(() => {
    setLoading(true)
    fetch(`/api/recipes/${query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(() => data)
        setLoading(false)
      })
  }, [])

  if(!recipeData) return <p>aiiiuda x2</p>

  return (
    <Layout>
      {isLoading && <p>Cargando..</p>}
      {!recipeData && <p>No existe info</p>}

      {recipeData && <RecipeDetail recipe={recipeData.recipe} /> }
    </Layout>
  )
}

