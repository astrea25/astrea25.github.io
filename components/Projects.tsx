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
      githubLink: "https://github.com/astrea25/Study-Assistant",
      link: "https://study-assistant-sage.vercel.app/"
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
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 fill-current"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="text-lg">GitHub</span>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                      <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512" 
                          className="h-6 w-6 fill-current">
                        
                        <path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z 
                          M172.211,41.609c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z 
                          M25.6,256c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262
                          C30.677,308.727,25.6,283,25.6,256z 
                          M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991C118.869,449.476,75.179,409.259,49.749,358.4z 
                          M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z 
                          M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z 
                          M243.2,153.6H141.841C161.323,85.052,199.39,35.063,243.2,26.812V153.6z 
                          M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992C393.131,62.524,436.821,102.741,462.251,153.6z 
                          M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z 
                          M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z 
                          M268.8,485.188V358.4h101.359C350.677,426.948,312.61,476.937,268.8,485.188z 
                          M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707C436.821,409.259,393.131,449.476,339.789,470.391z 
                          M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8
                          c0,27-5.077,52.727-13.662,76.8H402.244z"/>
                        
                      </svg>

                        <span className="text-lg">Visit Site</span>
                      </a>
                    )}
                  </div>
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