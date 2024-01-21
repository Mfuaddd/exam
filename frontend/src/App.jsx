import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import WishlistPage from "./pages/WishlistPage";
import BasketPage from "./pages/BasketPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/wish" element={<WishlistPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
