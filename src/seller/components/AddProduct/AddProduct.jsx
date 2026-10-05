import "./AddProduct.css";

function AddProduct({ onAddProduct }) {
    return (
        <div className="add-product-card">

            <button
                className="add-product-icon"
                onClick={onAddProduct}
                type="button"
            >
                +
            </button>

            <h3 className="add-product-title">
                Add Product
            </h3>

            <p className="add-product-description">
                Create a new product listing for wholesale buyers
            </p>

        </div>
    );
}

export default AddProduct;

