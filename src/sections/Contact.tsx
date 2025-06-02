function Contact() {
    return (
        <div className="relative mx-auto w-full pt-15 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto mb-10" id="contact">
                <h1 className="text-3xl lg:text-3xl font-bold text-zinc-800 mb-5">Contact</h1>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Address</h3>
                    <iframe className="mb-2 rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258.0796780197907!2d2.141552452170308!3d41.4124256113488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4980676b52ed1%3A0x8bfe312b71e39a0d!2sCarrer%20de%20Gomis%2C%2034%2C%20Gr%C3%A0cia%2C%2008023%20Barcelona%2C%20Spain!5e0!3m2!1sen!2s!4v1748577798657!5m2!1sen!2s" width="100%" height="400" loading="lazy"></iframe>
                    <p className="text-gray-600">
                        Calle Gomis 34, 08023 Barcelona, Spain.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
                    <p className="text-gray-600">+34 936 940 503</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
                    <p className="text-gray-600">info@moonshot.media</p>
                </div>

                <div className="relative h-0 overflow-hidden mb-6">

                </div>
            </div>
        </div>
    )
}

export default Contact;