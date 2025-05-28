function Card(props: any) {
    return (
        <div className="relative w-1/3 flex flex-col bg-red-50 rounded-lg">
            <div className="p-4">
                <div className="w-10">
                    {props.icon}
                </div>
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    {props.title}
                </h5>
            </div>
            <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
                <span className="text-sm text-slate-600 font-medium">
                    Last updated: 4 hours ago
                </span>
            </div>
        </div>
    )
}

export default Card;