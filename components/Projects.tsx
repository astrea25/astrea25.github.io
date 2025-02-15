"use client"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "Schedule Maker",
      description: "Taking inspiration from the arduous tasks in enlistment period, the website helps in planning out the schedule to enlist for. It will display all the classes listed in the Ateneo Integrated Student Information System (AISIS) portal where the user can select their classes and display these planned schedule in an organized time table. This was created using a combination of Boot Strap, and Vue.",
      image: "/seam-carve.png",
      githubLink: "https://github.com/astrea25/Schedule-Maker",
    },
    {
      title: "Seam Carver",
      description: "Similar with a commonly used photoshop feature, the program will help in resizing an image using the seam carving algorithm. It functions by establishing a number of seams (paths of least importance) in an image and automatically removes seams to reduce image size or inserts seams to extend it. This was created using Python",
      image: "/schedule-maker.png",
      githubLink: "https://github.com/astrea25/Seam-Carving",
    },
    {
      title: "Hobby Site",
      description: "Taking the combination of various platforms, the website features four different apps: Commission, Forum, Merchandise Store, and Wiki with a User Authentication. This was created using Django at its core.",
      image: "/hobbysite.png",
      githubLink: "https://github.com/astrea25/Hobbysite",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 cursor-pointer overflow-hidden">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-lg">GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects