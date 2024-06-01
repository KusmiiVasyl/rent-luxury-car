import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHub from "./pages/MainHub/MainHub";
import Home from "./pages/Home/Home";
import MyFavorites from "./pages/MyFavorites/MyFavorites";
import MyGarage from "./pages/MyGarage/MyGarage";
import Brands from "./pages/Brands/Brands";
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHub />}>
            <Route index element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="garage" element={<MyGarage />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
