function Card(props: any) {
    return (
        <div className="relative flex flex-col bg-red-50 rounded-lg w-full md:flex-[0_1_calc(50%-1rem)] lg:flex-[0_1_calc(33.333%-1rem)]">
            <div className="p-4">
                <div className="w-10">
                    {props.icon}
                </div>
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    {props.title}
                </h5>
            </div>
            <div className="mx-3 border-t border-zinc-200 pb-3 pt-2 px-1 flex justify-between">
                <span className="text-sm text-slate-600 font-medium">
                    <img src={props.flag} className="w-5"/>
                </span>
                <span className="text-sm text-slate-600 font-medium">
                    Since {props.year}
                </span>
            </div>
        </div>
    )
}

export default Card;