import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./ChooseProduct.css";

import searchIcon from "../../../assets/search.png";

import { getChooseProducts } from "../../Services/categoryService";


function ChooseProduct() {

    const navigate = useNavigate();

    const { categoryId } = useParams();

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        let active = true;

        const fetchProducts = async () => {

            try {

                setLoading(true);
                setError("");

                const data = await getChooseProducts(categoryId);

                if (active) {
                    setSelectedCategory(data);
                }

            } catch (error) {

                console.error(
                    "Error fetching category products:",
                    error
                );

                if (active) {
                    setError("Unable to load products.");
                    setSelectedCategory(null);
                }

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        };

        fetchProducts();

        return () => {
            active = false;
        };

    }, [categoryId]);


    const products = selectedCategory?.products || [];


    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
    );


    const handleProductClick = (product) => {

        const selectedData = {

            categoryId: categoryId,

            categoryName: selectedCategory?.name,

            productId: product.id,

            productName: product.name,

            productImage: product.image

        };

        console.log("Selected Product Data:", selectedData);

        navigate("/add-custom-product", {
            state: selectedData
        });

    };


    const handleAddCustom = () => {

        navigate("/add-custom-product", {

            state: {

                categoryId: categoryId,

                categoryName: selectedCategory?.name,

                productId: null,

                productName: "",

                productImage: null,

                isCustomProduct: true

            }

        });

    };


    return (

        <div className="choose-product-page">

            <section className="choose-product-header">

                <button
                    type="button"
                    className="close-button"
                    onClick={() => navigate("/seller/my-store")}
                >
                    ×
                </button>


                <div className="choose-progress-section">

                    <div className="choose-progress-text">
                        <span>Step 2 of 5</span>
                        <span>Choose Product</span>
                    </div>

                    <div className="choose-progress-bars">
                        <span className="choose-progress-bar active"></span>
                        <span className="choose-progress-bar active"></span>
                        <span className="choose-progress-bar"></span>
                        <span className="choose-progress-bar"></span>
                        <span className="choose-progress-bar"></span>
                    </div>

                </div>


                <h1>Choose Product</h1>


                <div className="choose-progress">
                    <div className="choose-progress-fill"></div>
                </div>


                <div className="choose-description-container">
                    <p>
                        Select the specific item you want to sell within the{" "}
                        {selectedCategory?.name || "selected"} category.
                    </p>
                </div>


                <div className="product-search-container">

                    <div className="product-search">

                        <img
                            src={searchIcon}
                            alt="Search"
                            className="product-search-icon"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    </div>

                </div>

            </section>


            {selectedCategory?.banner && (

                <div
                    className="agriculture-banner"
                    style={{
                        backgroundImage:
                            `url(${selectedCategory.banner})`
                    }}
                >

                    <div className="banner-overlay">

                        <h2 className="banner-category-name">
                            {selectedCategory.name}
                        </h2>

                    </div>

                </div>

            )}


            <section className="product-feed">

                {loading && (
                    <p className="no-products">
                        Loading products...
                    </p>
                )}


                {!loading && error && (
                    <p className="no-products" role="alert">
                        {error}
                    </p>
                )}


                {!loading && !error && (

                    <>
                        <div className="product-grid">

                            {filteredProducts.map((product) => (

                                <button
                                    type="button"
                                    className="product-story-card"
                                    key={product.id}
                                    onClick={() =>
                                        handleProductClick(product)
                                    }
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <div className="product-card-name">
                                        {product.name}
                                    </div>

                                </button>

                            ))}

                        </div>


                        {filteredProducts.length === 0 && (

                            <p className="no-products">
                                No products available in{" "}
                                {selectedCategory?.name}.
                            </p>

                        )}


                        <button
                            type="button"
                            className="add-custom-product"
                            onClick={handleAddCustom}
                        >

                            <span className="custom-plus">
                                +
                            </span>

                            <span>
                                Can't find your product? Add Custom
                            </span>

                        </button>

                    </>

                )}

            </section>

        </div>

    );

}

export default ChooseProduct;