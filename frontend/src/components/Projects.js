// src/components/Projects.js

import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projectData";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <br></br>
      <br></br>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <TerminalIcon className="mx-auto inline-block mb-4 text-gray-400 h-18 w-20" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps & Models I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I love working at the intersection of Software Development and Machine Learning.
            <br></br>
            My projects range from Full-Stack web applications to AI & ML classifiers built to solve real-world problems!
            <br></br>
            You can find more projects <a href="https://github.com/Atharva-ksh"><b><u>here!</u></b></a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4 h-full">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center object-top rounded-lg border-4 border-gray-700"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-800 opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}