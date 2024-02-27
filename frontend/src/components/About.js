import React from "react";

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <b>Hi, I'm Atharva Kshirsagar!</b>
                        <br className="hidden lg:inline-block" />I love to build cool Web and Machine Learning applications.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am currently working as a <b>Software Engineer</b> with a focus on Machine Learning and Backend Engineering.
                        I love playing guitar, hiking and exploring new food joints near me.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            See My Past Work
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Work With Me
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-lg w-full md:max-w-lg max-h-90 md:h-auto rounded-full overflow-hidden"
                        alt="hero"
                        src="/images/hero.jpg"
                    />
                </div>
            </div>
        </section>
    )
};

export default About;