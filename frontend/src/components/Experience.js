// experiences.js

import React from "react";
import { OfficeBuildingIcon } from "@heroicons/react/outline";

function Experience() {
    return (
        <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
            <div class="bg-gray text-white py-8">
                <br></br>
                <br></br>
                <div className="flex items-end justify-center mb-4 ">
                    <OfficeBuildingIcon className="h-18 w-20 text-gray-400" />
                </div>
                <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">

                    <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"><b>Work Experience</b></p>
                        <a
                            href="/files/Resume.pdf"
                            download="Resume.pdf"
                            className="inline-flex text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-700 rounded text-lg w-1/3 flex justify-center">
                            Resume
                        </a>
                    </div>
                    <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div class="container mx-auto w-full h-full">
                            <div class="relative wrap overflow-hidden p-10 h-full">
                                <div class="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ right: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}></div>
                                <div class="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ left: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}></div>
                                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div class="order-1 w-5/12"></div>
                                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                                        <p class="mb-3 text-base text-yellow-300">February 2024 - Present</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Software Engineer</h4>
                                        <h4 class="mb-3 text-base text-green-500"><b>SiriusMindshare Labs (San Jose, CA)</b></h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                            Enhanced backend functionality by developing and deploying <b>REST APIs</b>, and expanded product capabilities by 
                                            creating and integrating Generative AI models.
                                        </p>
                                    </div>
                                </div>
                                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div class="order-1 w-5/12"></div>
                                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                                        <p class="mb-3 text-base text-yellow-300">June 2023 - December 2023</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Software Engineer Intern - Machine Learning</h4>
                                        <h4 class="mb-3 text-base text-green-500"><b>SiriusMindshare Labs (San Jose, CA)</b></h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                        Improved email engagement with an <b>OpenAI Curie</b> chatbot and ReactJS UI, sped up backend processing by integrating models via REST APIs, 
                                        made the product 25% more efficient with ML models and new features, and reduced errors by 40% by fixing over 15 backend bugs.
                                        </p>
                                    </div>
                                </div>
                                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div class="order-1 w-5/12"></div>
                                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                                        <p class="mb-3 text-base text-yellow-300">June 2021 - Spetember 2021</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Software Engineer Intern</h4>
                                        <h4 class="mb-3 text-base text-green-500"><b>Reliance Jio Limited (Mumbai, IN)</b></h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                        Led a team to enhance Jio Coverage Platform, reduced integration issues by 20%, saved <b>10 hours</b> weekly 
                                        by streamlining Excel file validation, and automated data extraction, reducing processing time by 30%.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
