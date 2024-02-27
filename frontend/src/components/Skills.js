import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

function Skill({ logo, name, progress }) {
    return (
        <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={logo} alt={name} className="w-10 h-10 flex-shrink-0 mr-4 rounded-full" />
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <span className="title-font font-medium text-white">{name}</span>
                        <span className="text-gray-400">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1 mt-2 rounded-full">
                        <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const skills = [
        { name: "Python", logo: "/images/python.png", progress: 95 },
        { name: "ReactJS", logo: "/images/react.svg", progress: 80 },
        { name: "NodeJS", logo: "/images/node.svg", progress: 90 },
        { name: "Machine Learning", logo: "/images/ml.jpg", progress: 100 },
        { name: "Deep Learning", logo: "/images/dl.jpg", progress: 100 },
        { name: "MongoDB", logo: "/images/mongo.png", progress: 90 },
        { name: "Express", logo: "/images/express.png", progress: 85 },
        { name: "PostgreSQL", logo: "/images/postgres.png", progress: 85 },
        { name: "C++", logo: "/images/cpp.jpg", progress: 80 },
        { name: "Flask", logo: "/images/flask.svg", progress: 100 }
    ];

    return (
        <section id="skills">
            <br></br>
            <br></br>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="inline-block mb-4 h-18 w-20 text-gray-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        My skills range from strong coding skills in languages like Python, C++, JavaScript to solid understanding of System Design, Machine Learning and Backend Integration.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill, index) => (
                        <Skill key={index} logo={skill.logo} name={skill.name} progress={skill.progress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
