import Header from "../components/Header"
import Profile from "../components/Profile"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

