import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./AddCustomProduct.css";

import overlay from "../../../assets/overlay.png";
import photoupload from "../../../assets/photoupload.png";

import {
    getCategories,
    getSuggestedImages
} from "../../Services/categoryService";


function AddCustomProduct() {

    const navigate = useNavigate();
    const location = useLocation();

    const previousData = location.state || {};

    const [productName, setProductName] = useState(
        previousData.productName || ""
    );

    const [description, setDescription] = useState(
        previousData.description || ""
    );

    const [selectedImage, setSelectedImage] = useState(
        previousData.productImage || null
    );

    const [uploadedFile, setUploadedFile] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState({
        id: previousData.categoryId || 1,
        name: previousData.categoryName || "Agriculture"
    });

    const [categories, setCategories] = useState([]);
    const [suggestedImages, setSuggestedImages] = useState([]);

    const [showCategories, setShowCategories] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    
    useEffect(() => {

        let active = true;

        const fetchCategories = async () => {

            try {

                const data = await getCategories();

                if (active) {
                    setCategories(
                        Array.isArray(data)
                            ? data
                            : data.categories || []
                    );
                }

            } catch (error) {

                console.error(
                    "Error fetching categories:",
                    error
                );

                if (active) {
                    setError("Unable to load categories.");
                }
            }
        };

        fetchCategories();

        return () => {
            active = false;
        };

    }, []);


    
    useEffect(() => {

        let active = true;

        const fetchImages = async () => {

            try {

                setLoading(true);

                const data = await getSuggestedImages(
                    selectedCategory.id
                );

                if (active) {
                    setSuggestedImages(
                        Array.isArray(data) ? data : []
                    );
                }

            } catch (error) {

                console.error(
                    "Error fetching suggested images:",
                    error
                );

                if (active) {
                    setSuggestedImages([]);
                }

            } finally {

                if (active) {
                    setLoading(false);
                }
            }
        };

        fetchImages();

        return () => {
            active = false;
        };

    }, [selectedCategory.id]);


    

    const handleSuggestedImage = (image) => {

        setSelectedImage(image);
        setUploadedFile(null);

    };


    
    const handlePhotoUpload = (event) => {

        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            event.target.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
            setUploadedFile(file);
        };

        reader.readAsDataURL(file);

        event.target.value = "";
    };


    
    const handleChangeCategory = () => {

        setShowCategories((previous) => !previous);

    };


    
    const handleCategorySelect = (category) => {

        setSelectedCategory({
            id: category.id,
            name: category.name
        });

        setSelectedImage(null);
        setUploadedFile(null);

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

            categoryId: selectedCategory.id,
            category: selectedCategory.name,

            productId: previousData.productId || null,

            productName: productName.trim(),

            description: description.trim(),

            selectedImage,

            uploadedFile,

            isCustomProduct:
                previousData.isCustomProduct || false
        };

        console.log("Sending Product Data:", productData);

        navigate("/add-product-refined", {
            state: productData
        });

    };


    return (

        <div className="store-page custom-product-page">

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
                                {selectedCategory.name}
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

                        {error && (
                            <p role="alert">{error}</p>
                        )}

                        {categories.map((category) => (

                            <button
                                type="button"
                                key={category.id}
                                className={`custom-category-option ${
                                    String(selectedCategory.id) === String(category.id)
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

                    <label htmlFor="custom-product-name">
                        What are you selling?
                    </label>

                    <input
                        id="custom-product-name"
                        type="text"
                        value={productName}
                        onChange={(event) =>
                            setProductName(event.target.value)
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

                {loading ? (

                    <p>Loading suggested images...</p>

                ) : (

                    <div className="suggestion-images">

                        {suggestedImages.map((image, index) => (

                            <button
                                type="button"
                                key={`${selectedCategory.id}-${index}`}
                                className={`suggestion-image ${
                                    selectedImage === image
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSuggestedImage(image)
                                }
                            >

                                <img
                                    src={image}
                                    alt={`${selectedCategory.name} product ${index + 1}`}
                                />

                            </button>

                        ))}

                    </div>

                )}

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

                    {suggestedImages.map((image, index) => (

                        <button
                            type="button"
                            key={`${selectedCategory.id}-${index}`}
                            className={`thumbnail ${
                                selectedImage === image
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() =>
                                handleSuggestedImage(image)
                            }
                        >

                            <img
                                src={image}
                                alt={`${selectedCategory.name} ${index + 1}`}
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

                <label htmlFor="custom-product-description">
                    Brief Description (Optional)
                </label>

                <textarea
                    id="custom-product-description"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                    placeholder="Add specific variety, grade, or origin details..."
                />

            </div>


            
            <div className="next-button-wrapper">

                <button
                    type="button"
                    className="store-primary-button next-details-button"
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