import Link from "next/link"
import Image from "next/image"

const Article = ({ article }) => {
  return (
    <article className="flex items-center justify-center py-12 lg:items-start lg:max-w-lg">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm"> 
            <Link href='/'><Image width='384' height='208' className="rounded-t-lg max-h-52 w-full" src={article.image} alt={`illustration of ${article.title}`} /></Link>
            <div className="p-5 lg:h-96 lg:flex lg:flex-col">
                <Link href='/'>
                    <h2 
                        className="text-gray-900 font-bold text-2xl tracking-tight mb-2"
                    >
                        {article.title}
                    </h2>
                </Link>
                <p className="font-normal text-gray-700 mb-3">{article.description}</p>
                <Link 
                    href='/' 
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 inline-flex items-center lg:w-max lg:mt-auto"
                >
                    Learn more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    </article>
  )
}
export default Article