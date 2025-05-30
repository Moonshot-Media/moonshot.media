function Jobs() {
    return (
        <div className="relative mx-auto w-full pt-20 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto mb-5" id="jobs">
                <h1 className="text-3xl lg:text-3xl font-bold text-zinc-800">Jobs</h1>
            </div>
            <div className="w-full max-w-5xl mx-auto">
                <nav className="flex flex-col space-y-3">
                    <p className="line-through text-gray-500">
                        Rome Writers Needed (Local Experts)
                    </p>
                    <p className="line-through text-gray-500">Tailwind
                        Paris Writers Needed (Local Experts)
                    </p>
                    <p className="line-through text-gray-500">
                        London Writers Needed (Local Experts)
                    </p>
                </nav>
            </div>
        </div>
    )
}

export default Jobs;