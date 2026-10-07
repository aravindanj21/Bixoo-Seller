import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCustomProduct.css";

import overlay from "../../../assets/overlay.png";
import rices from "../../../assets/rices.png";
import coffees from "../../../assets/coffees.jpg";
import corns from "../../../assets/corns.jpg";
import photoupload from "../../../assets/photoupload.png";


import background from "../../../assets/Background.png";
import vehicles from "../../../assets/vehicles.png";
import machinery from "../../../assets/machinery.png";
import electronics from "../../../assets/electronics.png";
import rawmaterials from "../../../assets/rawmaterials.png";
import othercategories from "../../../assets/othercategories.png";

function AddCustomProduct() {
    const navigate = useNavigate();

   

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const [selectedCategory, setSelectedCategory] =
        useState("Agriculture");

    const [showCategories, setShowCategories] =
        useState(false);

    

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

   

    const suggestedImages = [
        {
            id: 1,
            image: rices,
        },
        {
            id: 2,
            image: coffees,
        },
        {
            id: 3,
            image: corns,
        },
    ];

    

    const handleSuggestedImage = (image) => {
        setSelectedImage(image);
    };

   

    const handlePhotoUpload = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        setSelectedImage(imageUrl);
    };

    

    const handleChangeCategory = () => {
        setShowCategories((previous) => !previous);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category.name);

       
        setShowCategories(false);
    };

    

    const handleNext = () => {

     
        if (!productName.trim()) {
            alert("Please enter the product name.");
            return;
        }

        
        if (!selectedImage) {
            alert("Please select or upload a product photo.");
            return;
        }

        const productData = {
            category: selectedCategory,
            productName: productName.trim(),
            description: description.trim(),
            selectedImage,
        };

        console.log("Custom Product Data:", productData);

        
        navigate("/add-product-refined", {
            state: productData,
        });
    };

    return (
        <div className="custom-product-page">

           

            <div className="custom-top-header">

                <button
                    type="button"
                    className="close-button"
                    onClick={() =>
                        navigate("/seller/my-store")
                    }
                >
                    ×
                </button>

                <div className="category-progress-section">

                    <div className="category-progress-text">
                        <span>Step 3 of 5</span>
                        <span>Custom Product</span>
                    </div>

                    <div className="category-progress-bars">
                        <span className="category-progress-bar active"></span>
                        <span className="category-progress-bar active"></span>
                        <span className="category-progress-bar active"></span>
                        <span className="category-progress-bar"></span>
                        <span className="category-progress-bar"></span>
                    </div>

                </div>

            </div>


            

            <div className="custom-header">

                <div className="custom-header-icon">
                    <img
                        src={overlay}
                        alt="Custom product"
                    />
                </div>

                <div className="custom-header-content">

                    <h2>
                        Can't find your product?
                    </h2>

                    <p>
                        Just enter a name and add a photo.
                        <br />
                        We'll handle the rest.
                    </p>

                </div>

            </div>


            

            <div className="product-info-card">

                <div className="category-box">

                    <div className="category-left">

                        <div>
                            <span className="category-label">
                                Category
                            </span>

                            <strong>
                                {selectedCategory}
                            </strong>
                        </div>

                    </div>


                    <button
                        type="button"
                        className="change-button"
                        onClick={handleChangeCategory}
                    >
                        {showCategories ? "Close" : "Change"}
                    </button>

                </div>


               

                {showCategories && (

                    <div className="custom-category-list">

                        {categories.map((category) => (

                            <button
                                type="button"
                                key={category.id}
                                className={`custom-category-option ${
                                    selectedCategory === category.name
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleCategorySelect(category)
                                }
                            >

                                <img
                                    src={category.image}
                                    alt={category.name}
                                />

                                <span>
                                    {category.name}
                                </span>

                            </button>

                        ))}

                    </div>

                )}


               
                <div className="selling-field">

                    <label>
                        What are you selling?
                    </label>

                    <input
                        type="text"
                        value={productName}
                        onChange={(event) =>
                            setProductName(
                                event.target.value
                            )
                        }
                        placeholder="e.g., Premium Basmati Rice"
                    />

                </div>

            </div>


            

            <div className="suggestion-card">

                <p className="suggestion-title">
                    Is this your product? Select to use
                    this image.
                </p>

                <div className="suggestion-images">

                    {suggestedImages.map((item) => (

                        <button
                            type="button"
                            key={item.id}
                            className={`suggestion-image ${
                                selectedImage === item.image
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() =>
                                handleSuggestedImage(
                                    item.image
                                )
                            }
                        >

                            <img
                                src={item.image}
                                alt="Suggested product"
                            />

                        </button>

                    ))}

                </div>

            </div>


            

            <div className="photo-card">

                <label className="photo-title">
                    Product Photos
                </label>


                

                <label className="main-photo-upload">

                    {selectedImage ? (

                        <img
                            src={selectedImage}
                            alt="Selected product"
                            className="main-selected-image"
                        />

                    ) : (

                        <>
                            <div className="camera-icon">

                                <img
                                    src={photoupload}
                                    alt="Upload"
                                />

                            </div>

                            <p>
                                Add Main Photo
                            </p>
                        </>

                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        hidden
                    />

                </label>


                

                <div className="photo-thumbnails">

                    <button
                        type="button"
                        className={`thumbnail ${
                            selectedImage === rices
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSuggestedImage(rices)
                        }
                    >
                        <img
                            src={rices}
                            alt="Rice"
                        />
                    </button>


                    <button
                        type="button"
                        className={`thumbnail ${
                            selectedImage === coffees
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSuggestedImage(coffees)
                        }
                    >
                        <img
                            src={coffees}
                            alt="Coffee"
                        />
                    </button>


                    <button
                        type="button"
                        className={`thumbnail ${
                            selectedImage === corns
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSuggestedImage(corns)
                        }
                    >
                        <img
                            src={corns}
                            alt="Corn"
                        />
                    </button>


                  

                    <label className="add-thumbnail">

                        <span>+</span>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            hidden
                        />

                    </label>

                </div>

            </div>



            <div className="description-card">

                <label>
                    Brief Description (Optional)
                </label>

                <textarea
                    value={description}
                    onChange={(event) =>
                        setDescription(
                            event.target.value
                        )
                    }
                    placeholder="Add specific variety, grade, or origin details..."
                />

            </div>


          
            <div className="next-button-wrapper">

                <button
                    type="button"
                    className="next-details-button"
                    onClick={handleNext}
                >
                    <span>
                        Next: Add Details
                    </span>

                    <span className="next-arrow">
                        →
                    </span>
                </button>

            </div>

        </div>
    );
}

export default AddCustomProduct;