import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

function AddProduct() {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/add-product/category");
    };

    return (
        <div className="add-product-card">

            <button
                className="add-product-icon"
                onClick={handleAddProduct}
                type="button"
            >
                +
            </button>

            <h3 className="add-product-title">
                Add Product
            </h3>

            <p className="add-product-description">
                List a new product in your store
            </p>

        </div>
    );
}

export default AddProduct;