import Member from "../components/Member";

function Team() {
    return (
        <div className="relative mx-auto w-full pt-20 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto mb-10" id="team">
                <h1 className="text-3xl lg:text-3xl font-bold text-zinc-800">Team</h1>
                <p className="mt-5 text-base text-zinc-500 flex flex-wrap items-center gap-1">
                    We're an international team located all across the globe with HQ in Barcelona.
                </p>
            </div>
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex flex-wrap gap-4 justify-between">
                    <Member avatar="/matthias.webp" name="Matthias" role="Founder" />
                    <Member avatar="/ryan.webp" name="Ryan" role="Developer" />
                    <Member avatar="/my.webp" name="My" role="Content Manager" />
                    <Member avatar="/thu.webp" name="Thu" role="Content Manager" />
                </div>
            </div>
        </div>
    )
}

export default Team;