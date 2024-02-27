import { AcademicCapIcon } from "@heroicons/react/solid";

function Education() {
    return (
        <section id="education" className="text-gray-300 bg-gray-900 body-font">
            <br></br>
            <br></br>
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex items-end justify-center mb-4 ">
                    <AcademicCapIcon className="h-18 w-20 text-gray-400" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                    <div className="mx-auto bg-gray-800 rounded-lg p-5 flex flex-cols space-x-7 items-center justify-center w-full lg:max-w-[900px] lg:max-h-[200px] ">
                        <div>
                            <img
                                className="object-cover object-center rounded-full w-40 h-40"
                                alt="hero"
                                src="/images/uci.png"
                            />
                        </div>
                        <div>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">University of California, Irvine</h1>
                            <p className="leading-relaxed">Degree: Masters' in Computer Science</p>
                            <p className="leading-relaxed">Duration: 2022 - 2023</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-5 flex flex-cols space-x-7 items-center justify-center w-full lg:max-w-[900px] mx-auto lg:max-h-[200px]">
                        <div>
                            <img
                                className="object-cover object-center rounded-full w-40 h-40"
                                alt="hero"
                                src="/images/mu.jpg"
                            />
                        </div>
                        <div>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">University of Mumbai, India</h1>
                            <p className="leading-relaxed">Degree: Bachelor's in Computer Engineering</p>
                            <p className="leading-relaxed">Duration: 2018 - 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;