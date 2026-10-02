import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Standard from "./pages/Standard";
import Businesses from "./pages/Businesses";
import News from "./pages/News";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Standard type="about" />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route
            path="/sustainability"
            element={<Standard type="sustainability" />}
          />
          <Route path="/farmers" element={<Standard type="farmers" />} />
          <Route path="/agritech" element={<Standard type="agritech" />} />
          <Route path="/careers" element={<Standard type="careers" />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
