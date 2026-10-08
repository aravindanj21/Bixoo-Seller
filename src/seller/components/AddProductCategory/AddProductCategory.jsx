import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../MyStore/MyStoreCommon.css";
import "./AddProductCategory.css";

import background from "../../../assets/Background.png";
import vehicles from "../../../assets/vehicles.png";
import machinery from "../../../assets/machinery.png";
import electronics from "../../../assets/electronics.png";
import rawmaterials from "../../../assets/rawmaterials.png";
import othercategories from "../../../assets/othercategories.png";
import search from "../../../assets/search.png";

function AddProductCategory() {
    const navigate = useNavigate();

   
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        {
            id: 1,
            name: "Agriculture",
            image: background,
        },
        {
            id: 2,
            name: "Vehicles",
            image: vehicles,
        },
        {
            id: 3,
            name: "Machinery",
            image: machinery,
        },
        {
            id: 4,
            name: "Electronics",
            image: electronics,
        },
        {
            id: 5,
            name: "Raw Materials",
            image: rawmaterials,
        },
        {
            id: 6,
            name: "Other Categories",
            image: othercategories,
        },
    ];

    
    const filteredCategories = categories.filter((category) =>
        category.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleCategoryClick = (category) => {
        console.log("Selected category:", category);

        navigate(`/choose-product/${category.id}`);
    };

    return (
        <div className="add-category-page">

            
            <div className="category-top-nav">

    <button
        className="close-button"
        onClick={() => navigate(-1)}
    >
        ×
    </button>

    <div className="category-progress-section">

        <div className="category-progress-text">
            <span>Step 1 of 5</span>
            <span>Category</span>
        </div>

        <div className="category-progress-bars">
            <div className="category-progress-bar active"></div>
            <div className="category-progress-bar"></div>
            <div className="category-progress-bar"></div>
            <div className="category-progress-bar"></div>
            <div className="category-progress-bar"></div>
        </div>

    </div>

</div>
            
            <div className="category-header">

                <h1>What are you selling?</h1>

                <p>
                    Choose a category to ensure buyers can easily
                    <br />
                    find your product.
                </p>

            </div>

            
            <div className="category-search">

                <span className="search-icon">
                    <img src={search} alt="Search" />
                </span>

                <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

            
            <div className="category-grid">

                {filteredCategories.length > 0 ? (

                    filteredCategories.map((category) => (

                        <div
                            className="category-card"
                            key={category.id}
                            onClick={() =>
                                handleCategoryClick(category)
                            }
                        >

                            <img
                                src={category.image}
                                alt={category.name}
                            />

                            <div className="category-card-bottom">

                                <span>
                                    {category.name}
                                </span>

                                <span className="arrow">
                                    ›
                                </span>

                            </div>

                        </div>

                    ))

                ) : (

                    <p className="no-category">
                        No categories found
                    </p>

                )}

            </div>

        </div>
    );
}

export default AddProductCategory;