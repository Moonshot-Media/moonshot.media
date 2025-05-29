function Member(props: any) {
    return (
        <div className="relative flex flex-col flex-[0_1_calc(50%-1rem)] lg:flex-[0_1_calc(20%-1rem)]">
            <div className="relative mb-6">
                <img src={props.avatar} alt="Antonio image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-2 border-dashed border-black" />
            </div>
            <h4
                className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center">
                    {props.name}
            </h4>
            <span
                className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                    {props.role}
            </span>
        </div>
    );
}

export default Member;