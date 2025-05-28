import Member from "../components/Member";

function Team() {
    return (
        <div className="relative mx-auto w-full pt-20 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto mb-15">
                <h1 className="text-xl lg:text-3xl font-bold text-zinc-800">Team</h1>
            </div>
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex gap-10 justify-between">
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                </div>
            </div>
        </div>
    )
}

export default Team;