function Footer() {
    return (
        <footer className="relative mx-auto w-full pt-10">
            <div className="w-full max-w-5xl mx-auto text-center text-gray-700 py-5 border-t border-zinc-100">
                © {new Date().getFullYear()} Moonshot Media S.L.U.
            </div>
        </footer>
    )
}

export default Footer;