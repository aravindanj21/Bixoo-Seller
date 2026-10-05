import { useNavigate } from "react-router-dom";
import "./AddProductCategory.css";

import background from "../../../assets/Background.png";
import vehicles from "../../../assets/vehicles.png"
import machinery from "../../../assets/machinery.png"
import electronics from "../../../assets/electronics.png"
import rawmaterials from "../../../assets/rawmaterials.png"
import othercategories from "../../../assets/othercategories.png"
import search from "../../../assets/search.png"



function AddProductCategory() {
    const navigate = useNavigate();

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

    const handleCategoryClick = (category) => {
        console.log("Selected category:", category);

      
    };

    return (
        <div className="add-category-page">

            
            <div className="category-top-nav">

                <button
                    className="close-button"
                    onClick={() => navigate("/mystore")}
                >
                    ×
                </button>

                <div className="progress-container">
                    <span className="progress active"></span>
                    <span className="progress"></span>
                    <span className="progress"></span>
                    <span className="progress"></span>
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
                />

            </div>


            
            <div className="category-grid">

                {categories.map((category) => (
                    <div
                        className="category-card"
                        key={category.id}
                        onClick={() =>
                            handleCategoryClick(category)
                        }
                    >

                        {category.image ? (
                            <img
                                src={category.image}
                                alt={category.name}
                            />
                        ) : (
                            <div className="category-placeholder">
                                {category.icon}
                            </div>
                        )}

                        <div className="category-card-bottom">

                            <span>
                                {category.name}
                            </span>

                            <span className="arrow">
                                ›
                            </span>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default AddProductCategory;