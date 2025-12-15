import React from 'react'
import Layout from './components/layout/layout.jsx'
import Hero from './features/hero/hero.jsx'
import About from './features/about/about.jsx'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export default App
