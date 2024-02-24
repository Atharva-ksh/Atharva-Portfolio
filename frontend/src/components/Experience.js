// experiences.js

import React from "react";
import { projects } from "../projectData";
import { OfficeBuildingIcon } from "@heroicons/react/solid";

function Experience() {
    return (
        <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
            <div class="bg-gray text-white py-8">
                <div className="flex items-end justify-center mb-4">
                    <OfficeBuildingIcon className="h-20 w-20 text-yellow-500" />
                </div>
                <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">

                    <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Work Experience</p>
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
                                        <p class="mb-3 text-base text-gray-300">February 2023 - Present</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Software Engineer</h4>
                                        <h4 class="mb-3 text-base text-green-500"><b>SiriusMindshare Labs</b></h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            Pick your favourite event(s) and register in that event by filling the form corresponding to that
                                            event. Its that easy
                                        </p>
                                    </div>
                                </div>
                                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div class="order-1 w-5/12"></div>
                                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                                        <p class="mb-3 text-base text-yellow-300">June 2023 - December 2023</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Software Engineer Intern - Machine Learning</h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            Participate online. The links for your registered events will be sent to you via email and whatsapp
                                            groups. Use those links and show your talent.
                                        </p>
                                    </div>
                                </div>
                                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div class="order-1 w-5/12"></div>
                                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                                        <p class="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                                            announced on the whatsapp groups and will be mailed to you.
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div class="order-1 w-5/12"></div>

                                    <div class="order-1  w-5/12 px-1 py-4">
                                        <p class="mb-3 text-base text-yellow-300">12 May, 2021</p>
                                        <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                                            their addresses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
