import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
        <div className="p-4 w-full flex flex-col items-center md:flex-row md:px-6 max-w-3xl mx-auto sm:px-6 lg:max-w-5xl lg:px-0 md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-500 sm:text-center sm:ml-10 dark:text-gray-400">
                © 2022 <Link href="/" className="hover:underline">Cybersecurity</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm sm:mr-10 text-gray-500 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
export default Footer