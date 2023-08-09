import Nav from "./components/Nav";
import Commercial from "./components/Commercial";
import Footer from "./components/Footer";
import Title1 from "./components/Title1";
import Info from "./components/Info";
import ProductSlider from "./components/ProductSlider";
import Info2 from "./components/Info2";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Ik from "./components/Ik";
import Shop from "./components/Shop";
import Online from "./components/Online";
import News from "./components/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Info />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Info2 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Commercial />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Title1 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ProductSlider />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/human-sources" element={<Ik />} />
        </Routes>
        <Routes>
          <Route path="/news" element={<News />} />
        </Routes>
        <Routes>
          <Route path="/online" element={<Online />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
