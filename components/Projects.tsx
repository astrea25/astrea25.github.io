"use client"
import Image from "next/image"
import { useState } from "react"

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projects = [
    {
      title: "Schedule Maker",
      description: "Taking inspiration from the arduous tasks in enlistment period, the website helps in planning out the schedule to enlist for. It will display all the classes listed in the Ateneo Integrated Student Information System (AISIS) portal where the user can select their classes and display these planned schedule in an organized time table. This was created using a combination of Boot Strap, and Vue.",
      image: "/schedule-maker.png",
      githubLink: "https://github.com/astrea25/Schedule-Maker",
    },
    {
      title: "Seam Carver",
      description: "Similar with a commonly used photoshop feature, the program will help in resizing an image using the seam carving algorithm. It functions by establishing a number of seams (paths of least importance) in an image and automatically removes seams to reduce image size or inserts seams to extend it. This was created using Python",
      image: "/seam-carve.png",
      githubLink: "https://github.com/astrea25/Seam-Carving",
    },
    {
      title: "Hobby Site",
      description: "Taking the combination of various platforms, the website features four different apps: Commission, Forum, Merchandise Store, and Wiki with a User Authentication. This was created using Django at its core.",
      image: "/hobbysite.png",
      githubLink: "https://github.com/astrea25/Hobbysite",
    },
    {
      title: "Study Assistant",
      description: "A modern web application built with Vue.js that leverages AI-powered tools to enhance studying efficiency. Features include PDF management for uploading and processing study materials, AI-generated flashcards with spaced repetition learning, smart note-taking with automatic summarization, and customizable test generation with multiple question types and automatic grading.",
      image: "/study-assistant.png",
      githubLink: "https://github.com/astrea25/Study-Assistant"
    }
  ];

  return (
    <>
      <section id="projects" className="bg-slate-300 text-slate-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="relative h-48 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors mt-4"
                  >
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="h-6 w-6"
                  />
                    <span className="text-lg">GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects