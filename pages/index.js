import Article from "../components/article"
import Head from "next/head"
import { connectDb } from "../config/connectDb"

const Home = (props) => {

    const { articles } = props

    if (props.error) return <p>{props.error.text}</p>

  return (
    <>
        <Head>
            <title>Cybersecurity</title>
            <meta name="description" content="Blog about cybersecurity" />
            <link rel="icon" href="/logo-no-background.png" />
        </Head>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-0">
            <header className="flex flex-col items-center justify-center min-h-screen hero">
                <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl xl:text-6xl mb-4">
                    Cybersecurity threats 101
                </h1>
                <p className="mb-6 text-base text-center font-medium text-gray-500 lg:text-2xl sm:text-lg xl:text-4xl dark:text-gray-400">
                    What a cybersecurity expert understands: A blog about different cyber threats and how you can protect yourself.
                </p>
                <a className="animate-bounce cursor-pointer mt-16" href="#articles">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-20 w-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </header>
            {/* <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
            <div id="articles" className="mb-20 lg:grid lg:grid-cols-2 scroll-mt-6 md:scroll-mt-12">
                {
                    articles.map(article => <Article key={article.id} article={article} />)
                }
            </div>
        </main>
    </>
  )
}
export default Home

export const getServerSideProps = async () => {
    const query = 'select * from articles'
    const data = await connectDb(query)

    return {
        props: {
            articles: data
        }
    }
}