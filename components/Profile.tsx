const Profile = () => {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-slate-700 text-white h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-serif font-bold mb-6 text-gray-100 tracking-wide leading-tight">
          Aster Benedict A. Mangabat
        </h1>
        <p className="text-3xl font-sans font-medium text-gray-300 tracking-wide leading-relaxed">
          BS Computer Science
        </p>
        <p className="text-3xl font-sans font-medium mb-20 text-gray-300 tracking-wide leading-relaxed">
          Ateneo de Manila University
        </p>
        <a
          href="#contact"
          className="bg-white text-slate-900 px-6 py-2 rounded-full font-sans font-semibold hover:bg-gray-100 hover:text-slate-900 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Profile;