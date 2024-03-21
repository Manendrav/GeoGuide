import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from 'react-hot-toast';

function App() {
  const [data, setData] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentLoaded(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  console.log('Data:', data);

  return (
    <div data-theme='light' >
      {
        contentLoaded ? (
          <div className="bg-img">
            <nav className='bg-gray-100'>
              <Navbar />
            </nav>

            <div className='min-h-screen max-w-6xl mx-auto p-3 overflow-hidden'>
              <Outlet />
            </div>

            <footer className='bg-black text-white'>
              <Footer />
            </footer>
          </div>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <div className="leap-frog">
              <div className="leap-frog__dot"></div>
              <div className="leap-frog__dot"></div>
              <div className="leap-frog__dot"></div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
