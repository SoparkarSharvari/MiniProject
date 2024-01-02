// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";
import ImageUpload from "./Home1"; // Adjust the import path if needed
import ImageUpload1 from "./home";
import BotpressChat from "./BotpressChat";
import FfPage from './FfPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FfPage />} />
        <Route path="/1" element={<FrontPage />} />
        <Route path="/Predict" element={<ImageUpload />} />
        <Route path="/weedPredict" element={<ImageUpload1 />} />
      </Routes>
      <BotpressChat />
    </Router>
  );
}

export default App;
