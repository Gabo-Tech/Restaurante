import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reserve from "./components/Reserve";
import Tercer from "./components/Tercer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Reserve />} />
          <Route path="/tercer" element={<Tercer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
