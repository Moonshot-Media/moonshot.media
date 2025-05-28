import logo from '../assets/logo.png';
function Navigation() {
    return (
        <nav className="relative w-full max-w-5xl mx-auto mt-5 px-3 md:px-5 lg:px-8">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="mr-4 block cursor-pointer">
                    <img src={logo} className='w-50' />
                </a>
                <div className="hidden lg:block">
                    <ul className="flex flex-col justify-center gap-2 mt-2 mb-4 px-4 py-2 shadow-sm rounded-full lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="flex items-center p-1 text-sm gap-x-2 text-gray-700 font-medium">
                            <a href="#" className="flex items-center">
                                Projects
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 text-gray-700 font-medium">
                            <a href="#" className="flex items-center">
                                Team
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 text-gray-700 font-medium">
                            <a href="#" className="flex items-center">
                                Jobs
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 text-gray-700 font-medium">
                            <a href="#" className="flex items-center">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;