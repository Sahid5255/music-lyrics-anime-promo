import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CoverArt from "./pages/CoverArt";
import Animation from "./pages/Animation";
import LyricsVideos from "./pages/LyricsVideos";
import Promotion from "./pages/Promotion";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">

        {/* Navigation */}
        <Navbar />

        {/* Pages */}
        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/cover-art"
              element={<CoverArt />}
            />

            <Route
              path="/animation"
              element={<Animation />}
            />

            <Route
              path="/lyrics-videos"
              element={<LyricsVideos />}
            />

            <Route
              path="/promotion"
              element={<Promotion />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
