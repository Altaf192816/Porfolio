import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Homepage = lazy(()=>import("./pages/Homepage"));
const About = lazy(()=>import("./pages/About"));
const Contact = lazy(()=>import("./pages/Contact"));
const Work = lazy(()=>import("./pages/Work"));
const Services = lazy(()=>import("./pages/Services"));
const Testimonials = lazy(()=>import("./pages/Testimonials"));
const PageNotFound = lazy(()=>import("./pages/PageNotFound"));


function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
      <Suspense fallback = {<LoadingSpinner/>}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
