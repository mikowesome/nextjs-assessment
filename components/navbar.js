import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full dark:bg-gray-900 z-10">
        <div className="flex items-center justify-between px-4 py-2.5 md:px-6 max-w-3xl mx-auto sm:px-6 lg:max-w-5xl lg:px-0">
            <Link href='/' className='flex items-center'>
                <img 
                    src='./logo-no-background.png' 
                    className='h-6 mr-3 sm:h-9 sm:ml-10' 
                    alt='cybersecurity logo' 
                />
                <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                    Cybersecurity
                </span>
            </Link>
        </div>
    </nav>
  )
}
export default Navbar