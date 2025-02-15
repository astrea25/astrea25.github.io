const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            {/* Email Link */}
            <a
              href="mailto:asterbenedictmangabat@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img
                src="/email.png"
                alt="Email"
                className="h-6 w-6"
              />
              <span className="text-lg">Email</span>
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/astrea25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="h-6 w-6"
              />
              <span className="text-lg">GitHub</span>
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/aster-benedict-mangabat-047590211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6"
              />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-600 text-center mt-4">
            Feel free to reach out through any of these platforms!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;