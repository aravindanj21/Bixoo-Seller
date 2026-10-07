import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SellerDashboard from "./seller/pages/sellerDashboard/SellerDashboard";
import MyStorePage from "./seller/pages/MyStorePage/MyStorePage";
import AddProductCategoryPage from "./seller/pages/AddProductCategorypage/AddProductCategorypage"; 
import ChooseProduct from "./seller/components/ChooseProduct/ChooseProduct";
import AddCustomProduct from "./seller/components/AddCustomProduct/AddCustomProduct";
import AddProductRefinedPage from "./seller/pages/AddProductRefinedPage/AddProductRefined";
import ProductPreviewPage from "./seller/pages/ProductPreviewPage/ProductPreviewPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigate to="/seller/dashboard" />} />

                <Route
                    path="/seller/dashboard"
                    element={<SellerDashboard />}
                />

                <Route
                    path="/seller/my-store"
                    element={<MyStorePage />}
                />

                <Route
                path="/add-product/category"
                element={<AddProductCategoryPage />}
                />

               <Route
               path="/choose-product/:categoryId"
               element={<ChooseProduct />}
               />

                <Route
                 path="/add-custom-product"
                 element={<AddCustomProduct />}
                />

                <Route
                path="/add-product-refined"
                element={<AddProductRefinedPage />}
                />

                <Route
                path="/product-preview"
                element={<ProductPreviewPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;