const QuestionStatCard = ({
    title,
    value,
    icon,
    subtitle,
    onClick
}) => {

    return (

        <div
            onClick={onClick}
            className="rounded-2xl bg-white p-6 shadow hover:shadow-lg cursor-pointer transition"
        >

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>

                    {subtitle && (
                        <p className="mt-2 text-sm text-slate-400">
                            {subtitle}
                        </p>
                    )}

                </div>

                <div className="text-5xl">
                    {icon}
                </div>

            </div>

        </div>

    );

};

export default QuestionStatCard;