import Navigation from "../components/Navigation";

function Header() {
    return (
        <>
            <Navigation />
            <div className="relative mx-auto w-full pt-10 lg:pt-30">
                <div className="w-full max-w-5xl mx-auto px-3 md:px-5 lg:px-8">
                    <h1 className="text-2xl lg:text-5xl font-bold text-zinc-800">Your Journey Starts here</h1>
                    <p className="mt-5 text-base text-zinc-500">
                        We share inspiring stories, expert tips, and epic guides to help you explore the world with confidence.
                    </p>
                </div>
                <div className="mt-15">
                    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                        <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
                            <img
                                alt="barcelona"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/public/barcelona.jpg"
                            />
                        </div>
                        <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
                            <img
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/public/lisbon.jpg"
                            />
                        </div>
                        <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
                            <img
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/public/london.jpg" />
                        </div>
                        <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
                            <img
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/public/paris.jpg" />
                        </div>
                        <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
                            <img
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/public/rome.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;