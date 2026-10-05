import { useState } from "react";
import "./ChooseProduct.css";

import categoryheader from "../../../assets/categoryheader.png";
import basmathirice from "../../../assets/basmathirice.png";
import wheat from "../../../assets/wheat.png";
import corn from "../../../assets/corn.png";
import rawcotton from "../../../assets/rawcotton.png";
import coffee from "../../../assets/coffee.png";
import tealeaves from "../../../assets/tealeaves.png";
import searchIcon from "../../../assets/search.png";

function ChooseProduct() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
        {
            id: 1,
            name: "Basmati Rice",
            image: basmathirice,
        },
        {
            id: 2,
            name: "Wheat",
            image: wheat,
        },
        {
            id: 3,
            name: "Corn / Maize",
            image: corn,
        },
        {
            id: 4,
            name: "Raw Cotton",
            image: rawcotton,
        },
        {
            id: 5,
            name: "Coffee Beans",
            image: coffee,
        },
        {
            id: 6,
            name: "Tea Leaves",
            image: tealeaves,
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (product) => {
        console.log("Selected product:", product);
    };

    const handleAddCustom = () => {
        console.log("Add custom product");
    };

    return (
        <div className="choose-product-page">

            
            <section className="choose-product-header">

                <div className="step-text">
                    STEP 2 OF 4
                </div>

                <h1>Choose Product</h1>

                
                <div className="choose-progress">
                    <div className="choose-progress-fill"></div>
                </div>

                <div className="choose-description-container">
                    <p>
                        Select the specific item you want to sell within the
                        Agriculture category.
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
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />

                    </div>

                </div>

            </section>



            <div
                className="agriculture-banner"
                style={{
                    backgroundImage: `url(${categoryheader})`,
                }}
            >
            </div>


            
            <section className="product-feed">

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

                        </button>

                    ))}

                </div>


                
                <button
                    type="button"
                    className="add-custom-product"
                    onClick={handleAddCustom}
                >

                    <span className="custom-plus">+</span>

                    <span>
                        Can't find your product? Add Custom
                    </span>

                </button>

            </section>

        </div>
    );
}

export default ChooseProduct;