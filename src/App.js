import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Layout/Header";
import MarketPage from "./pages/Market/MarketPage";
import AddItemPage from "./pages/AddItem/AddItemPage";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/index.css";
import { CommunityPage } from "./pages/Community/CommunityPage";
import { ProductDetailPage } from "./pages/ProductDetail/ProductDetailPage";
import { SigninPage } from "./pages/AuthPage/SigninPage";
import { SignupPage } from "./pages/AuthPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="TopHeader">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route
            path="/products/:id/comments"
            element={<ProductDetailPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
