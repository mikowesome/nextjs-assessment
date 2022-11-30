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
            <header className="flex items-center justify-center min-h-screen hero">
                <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl xl:text-6xl">
                    Cybersecurity threats 101: What a cybersecurity expert understands: a blog about different cyber threats and how you can protect yourself.
                </h1>
            </header>
            {/* <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
            <div className="mb-20 lg:grid lg:grid-cols-2">
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