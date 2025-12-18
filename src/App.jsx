import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/common/loader.jsx';
import BackToTop from './components/common/backtotop.jsx';
import Layout from './components/layout/layout.jsx';

import routes from './route/index.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progress = document.getElementById('scroll-progress');
      if (progress) progress.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Layout>
        <div id="scroll-progress"></div>

        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.view}
            />
          ))}
        </Routes>
      </Layout>

      <BackToTop />
    </>
  );
}

export default App;
