import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../MyStore/MyStoreCommon.css";
import "./AddProductCategory.css";

import search from "../../../assets/search.png";

import { getCategories } from "../../Services/categoryService";

function AddProductCategory() {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        let active = true;

        const fetchCategories = async () => {

            try {
                setLoading(true);
                setError("");

                const data = await getCategories();

                if (active) {
                    const categoryList = Array.isArray(data)
                        ? data
                        : data.categories || [];

                    setCategories(categoryList);
                }

            } catch (error) {

                console.error(
                    "Error fetching categories:",
                    error
                );

                if (active) {
                    setError("Unable to load categories.");
                }

            } finally {

                if (active) {
                    setLoading(false);
                }
            }
        };

        fetchCategories();

        return () => {
            active = false;
        };

    }, []);


    const filteredCategories = categories.filter((category) =>
        category.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
    );


    const handleCategoryClick = (category) => {

        console.log("Selected category:", category);

        navigate(`/choose-product/${category.id}`, {
            state: {
                selectedCategory: category
            }
        });
    };


    return (
        <div className="add-category-page">

            <div className="category-top-nav">

                <button
                    type="button"
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

                {loading && (
                    <p className="no-category">
                        Loading categories...
                    </p>
                )}

                {!loading && error && (
                    <p className="no-category" role="alert">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    filteredCategories.length > 0 ? (

                        filteredCategories.map((category) => (

                            <div
                                className="category-card"
                                key={category.id}
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                    handleCategoryClick(category)
                                }
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                    ) {
                                        e.preventDefault();
                                        handleCategoryClick(category);
                                    }
                                }}
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

                    )
                )}

            </div>

        </div>
    );
}

export default AddProductCategory;