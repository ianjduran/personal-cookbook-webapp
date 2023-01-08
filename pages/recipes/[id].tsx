import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import * as Realm from 'realm-web'

import Layout from "../../components/Layout";
import RecipeDetail from "../../components/RecipeDetail";



export default function RecipeDetails(){
    const [ productData,setProductData] = useState<any>()
    const { query } = useRouter();
    
    useEffect(() => {
        const getRecipe = async () => {
          const REALM_APP_ID = String(process.env.NEXT_PUBLIC_REALM_APP_ID)
          const app = new Realm.App({ id: REALM_APP_ID });
          const credentials = Realm.Credentials.anonymous();
          try {
            const user = await app.logIn(credentials)
            console.log(query.id, " -> ", typeof query.id)
            const product = await user.functions.getOneRecipe(query.id)
            console.log('success')
            setProductData(() => product)
          } catch (error) {
            console.log("Hubo un error", error)
          }
        }
    
        getRecipe();
      }, [])


    return(
        <Layout>
            {productData && <RecipeDetail recipe={productData}/>}
        </Layout>
    )
}