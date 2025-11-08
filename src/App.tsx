import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Portfolio from "@/components/sections/Portfolio"
import Contact from "@/components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[rgb(25,29,43)] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App