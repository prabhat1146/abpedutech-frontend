import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();


    return (

        <div className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-slate-100
            p-6
        ">


            <div className="
                w-full
                max-w-xl
                rounded-3xl
                bg-white
                p-10
                text-center
                shadow-xl
            ">


                {/* Icon */}

                <div className="
                    mx-auto
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-100
                    text-6xl
                ">
                    🚀
                </div>




                <h1 className="
                    mt-8
                    text-7xl
                    font-black
                    text-slate-800
                ">
                    404
                </h1>



                <h2 className="
                    mt-4
                    text-2xl
                    font-bold
                    text-slate-800
                ">
                    Page Not Found
                </h2>



                <p className="
                    mt-3
                    text-slate-500
                ">
                    The page you are looking for doesn't exist
                    or has been moved.
                </p>





                {/* Actions */}


                <div className="
                    mt-8
                    flex
                    justify-center
                    gap-4
                ">


                    <button
                        onClick={() => navigate(-1)}
                        className="
                            rounded-xl
                            border
                            px-6
                            py-3
                            font-semibold
                            text-slate-700
                            hover:bg-slate-100
                            transition
                        "
                    >
                        ← Go Back
                    </button>





                    <button
                        onClick={() => navigate("/")}
                        className="
                            rounded-xl
                            bg-indigo-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-indigo-200
                            hover:bg-indigo-700
                            transition
                        "
                    >
                        Home
                    </button>



                </div>




                {/* Footer */}


                <p className="
                    mt-10
                    text-sm
                    text-slate-400
                ">
                    ABP EduTech • Learning Platform
                </p>


            </div>


        </div>

    );
};


export default ErrorPage;