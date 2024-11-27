import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
// import './App.css';
// import './background.css';

function App() {
  const [count, setCount] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    let isTransitioning = false;
    const interval = setInterval(() => {
      if (isTransitioning) {
        document.body.classList.remove('bg-transition');
        document.body.classList.add('bg-transition-stop');
      } else {
        document.body.classList.remove('bg-transition-stop');
        document.body.classList.add('bg-transition');
      }
      isTransitioning = !isTransitioning;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll('.letter');
    gsap.to(letters, {
      y: 20,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: 'start',
      },
      ease: 'sine.inOut',
    });
  }, []);

  const headingText = "Happy Anniversary";
  const splitText = headingText.split('').map((char, index) => (
    <span key={index} className="letter inline-block bold-black">
      {char}
    </span>
  ));

  return (
    <>
      <header className="bg-gray-800 text-white p-6 border-b border-gray-700 flex justify-center items-center">
        <h1 ref={headingRef} className="large-text">
          {splitText}
        </h1>
      </header>
      <main className="p-6">
        <section id="home" className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Home</h2>
          <p className="text-gray-200">Welcome to our anniversary celebration website.</p>
        </section>
        <section id="about" className="mb-6">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="text-gray-200">We are celebrating our love and journey together.</p>
        </section>
        <section id="gallery" className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="photo1.jpg" className="rounded-lg transition-transform transform hover:scale-105" alt="Photo 1" />
            <img src="photo2.jpg" className="rounded-lg transition-transform transform hover:scale-105" alt="Photo 2" />
            <img src="photo3.jpg" className="rounded-lg transition-transform transform hover:scale-105" alt="Photo 3" />
            <img src="photo4.jpg" className="rounded-lg transition-transform transform hover:scale-105" alt="Photo 4" />
          </div>
        </section>
        <section id="contact" className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <p className="text-gray-200">Feel free to reach out to us for any queries.</p>
        </section>
      </main>
      <footer className="text-white p-6 border-t border-gray-700 bg-sky-400">
        <p>&copy; 2023 Anniversary Celebration. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;