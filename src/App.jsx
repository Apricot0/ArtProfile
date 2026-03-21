import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ConceptArtPage from "./pages/ConceptArtPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import IllustrationPage from "./pages/IllustrationPage.jsx";
import TraditionalArtsPage from "./pages/TraditionalArtsPage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/illustration" element={<IllustrationPage />} />
        <Route path="/traditional-arts" element={<TraditionalArtsPage />} />
        <Route path="/concept-art" element={<ConceptArtPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}
