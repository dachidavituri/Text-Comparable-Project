import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "&/Layout";
import CompareText from "#/compareText";

import SpeechToText from "#/speechToText";
import PdfConvert from "#/pdfConvert";
import TextToSpeech from "#/textToSpeech";
import Home from "#/home";

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
        </Routes>
      </Layout>
    </Router>
  );
}
