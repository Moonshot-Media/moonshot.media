import Home from "./Home";

function App() {
    return (
        <>
            <div className='relative flex flex-col bg-zinc-50'>
                <div className="fixed inset-0 flex justify-center">
                    <div className="flex w-full max-w-7xl lg:px-8">
                        <div className="w-full bg-white ring-1 ring-zinc-100"></div>
                    </div>
                </div>
            </div>
            <Home />
        </>
    )
}

export default App;