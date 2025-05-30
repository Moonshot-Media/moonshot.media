function Jobs() {
    return (
        <div className="relative mx-auto w-full pt-20 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto mb-5" id="jobs">
                <h1 className="text-3xl lg:text-3xl font-bold text-zinc-800">Jobs</h1>
            </div>
            <div className="w-full max-w-5xl mx-auto">
                <nav className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-500 hover:text-indigo-500">
                        Allstate Insurance
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-500">Tailwind
                        State Farm Insurance
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-500">
                        GEICO
                        Insurance<span className="px-2 py-1 ml-2 text-xs font-semibold text-white uppercase bg-indigo-600 rounded-full">New</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-500">
                        Progressive Insurance
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-500">Tailwind
                        American Family Insurance
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-500">Free Tailwind CSS
                        USAA (United Services Automobile Association)
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Jobs;