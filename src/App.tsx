import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import CompareText from "./pages/compareText/compareText";
import About from "./pages/about/about";
import SpeechToText from "./pages/speechToText/speechToText";
import PdfConvert from "./pages/pdfConvert/pdfConvert";
import TextToSpeech from "./pages/textToSpeech/textToSpeech";
import Home from "./pages/home/home";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<CompareText />} />
          <Route path="/speech" element={<SpeechToText />} />
          <Route path="/tts" element={<TextToSpeech />} />
          <Route path="/pdf" element={<PdfConvert />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
