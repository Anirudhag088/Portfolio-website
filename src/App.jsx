import  React  from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'




export const App = () => {
  return (
    <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Contact />
         <Footer />
         

    </>
  )
}
