import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCustomProduct.css";

import overlay from "../../../assets/overlay.png";
import rices from "../../../assets/rices.png";
import coffees from "../../../assets/coffees.jpg";
import corns from "../../../assets/corns.jpg";
import photoupload from "../../../assets/photoupload.png"

function AddCustomProduct() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const suggestedImages = [
        { id: 1, image: rices },
        { id: 2, image: coffees },
        { id: 3, image: corns },
    ];

    const handleSuggestedImage = (image) => {
        setSelectedImage(image);
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleNext = () => {
        console.log({
            category: "Agriculture",
            productName,
            description,
            selectedImage,
        });

        
    };

    return (
        <div className="custom-product-page">

            
            <div className="custom-step-section">

                <div className="custom-step-text">
                    <span>Step 2.5 of 4</span>
                    <span>Custom Product</span>
                </div>

                <div className="custom-progress">
                    <div className="progress-part completed"></div>
                    <div className="progress-part completed"></div>
                    <div className="progress-part active"></div>
                    <div className="progress-part"></div>
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
                    <h2>Can't find your product?</h2>

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

                        <div className="category-icon">
                            ♨
                        </div>

                        <div>
                            <span className="category-label">
                                Category
                            </span>

                            <strong>
                                Agriculture
                            </strong>
                        </div>

                    </div>

                    <button
                        type="button"
                        className="change-button"
                        onClick={() => navigate(-1)}
                    >
                        Change
                    </button>

                </div>


                <div className="selling-field">

                    <label>
                        What are you selling?
                    </label>

                    <input
                        type="text"
                        value={productName}
                        onChange={(e) =>
                            setProductName(e.target.value)
                        }
                        placeholder="e.g., Premium Basmati Rice"
                    />

                </div>

            </div>


            
            <div className="suggestion-card">

                <p className="suggestion-title">
                    Is this your product? Select to use this
                    image.
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
                                handleSuggestedImage(item.image)
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
                            <img src={photoupload} alt="Add product" />
                            </div>

                            <p>Add Main Photo</p>
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

                    {suggestedImages.map((item) => (
                        <button
                            type="button"
                            key={item.id}
                            className={`thumbnail ${
                                selectedImage === item.image
                                    ? "thumbnail-selected"
                                    : ""
                            }`}
                            onClick={() =>
                                handleSuggestedImage(item.image)
                            }
                        >
                            <img
                                src={item.image}
                                alt="Product"
                            />
                        </button>
                    ))}


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
                    onChange={(e) =>
                        setDescription(e.target.value)
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
                    <span>Next: Add Details</span>
                    <span className="next-arrow">→</span>
                </button>

            </div>

        </div>
    );
}

export default AddCustomProduct;