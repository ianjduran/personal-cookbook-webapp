import Layout from "../components/Layout";

export default function NotFoundPage(){
    return(
        <Layout>
            <div className="flex flex-col align-middle justify-center items-center">
                <p className="block text-5xl font-medium font-subtitle">Oops!</p>
                <p className="block">No encontramos esa pagina</p>
            </div>
        </Layout>
    )
}