import { articles } from "../data/articles"
import Article from "../components/article"
import Head from "next/head"

const Home = ({ articles }) => {
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
                <p className="mb-6 text-lg text-center font-medium text-gray-500 lg:text-3xl sm:text-xl xl:text-5xl dark:text-gray-400">
                    What a cybersecurity expert understands: A blog about different cyber threats and how you can protect yourself.
                </p>
                <a className="animate-bounce cursor-pointer" href="#articles">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </header>
            {/* <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
            <div id="articles" className="mb-20 lg:grid lg:grid-cols-2 scroll-mt-6">
                {
                    articles.map(article => <Article key={article.id} article={article} />)
                }
            </div>
        </main>
    </>
  )
}
export default Home

export const getStaticProps = async () => {
    return {
        props: {
            articles
        }
    }
}