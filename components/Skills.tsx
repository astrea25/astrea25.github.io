const Skills = () => {
  const skillCategories = {
    "Programming Languages": [
        "Java",
        "Python",
        "C++",
        "C#",
        "JavaScript",
    ],
    "Technologies & Frameworks": [
      "HTML",
      "CSS",
      "Node.js",
      "Django"
    ],
    "Developer Tools": [
      "Git",
      "Docker",
      "AWS",
      "VS Code",
      "Postman"
    ],
    "Libraries": [
      "React",
      "Vue",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "Spring Boot"
    ],
    "Databases": [
        "MySQL",
        "PostgreSQL"
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-full shadow-sm text-center border border-gray-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills
  
  