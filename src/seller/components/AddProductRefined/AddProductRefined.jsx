import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVideo } from "react-icons/fi";

import "./AddProductRefined.css";

import truck from "../../../assets/truck.png";
import cameraicon from "../../../assets/cameraicon.png";
import wheatimage from "../../../assets/wheatimage.jpg";
import mountain from "../../../assets/mountain.png";

function AddProductRefined() {
    const navigate = useNavigate();
    const location = useLocation();

    
    const previousProductData = location.state || {};

    

    const [quantity, setQuantity] = useState(50);

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(0, prev - 1));
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };


    

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [negotiable, setNegotiable] = useState(false);


    

    const [freeDelivery, setFreeDelivery] = useState(false);


    

    const [condition, setCondition] = useState("new");


    

    const [photos, setPhotos] = useState([]);

    const photoInputRef = useRef(null);

    const handlePhotoUpload = (event) => {
        const files = Array.from(event.target.files || []);

        if (files.length === 0) {
            return;
        }

        const imageFiles = files.filter((file) =>
            file.type.startsWith("image/")
        );

        if (imageFiles.length === 0) {
            alert("Please select valid image files.");
            return;
        }

        const availableSlots = 5 - photos.length;

        if (availableSlots <= 0) {
            alert("You can upload a maximum of 5 photos.");
            return;
        }

        const selectedFiles = imageFiles.slice(
            0,
            availableSlots
        );

        const newPhotos = selectedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setPhotos((prev) => [
            ...prev,
            ...newPhotos,
        ]);

        
        event.target.value = "";
    };


    

    const removePhoto = (index) => {
        setPhotos((prev) => {
            const photoToRemove = prev[index];

            if (photoToRemove?.preview) {
                URL.revokeObjectURL(
                    photoToRemove.preview
                );
            }

            return prev.filter(
                (_, photoIndex) =>
                    photoIndex !== index
            );
        });
    };


    
    const [productVideo, setProductVideo] =
        useState(null);

    const videoInputRef = useRef(null);


    
    const handleVideoUpload = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("video/")) {
            alert("Please select a valid video file.");
            return;
        }

        setProductVideo(file);

        event.target.value = "";
    };


    

    const removeVideo = () => {
        setProductVideo(null);
    };


    

    const [description, setDescription] =
        useState("");


    
    const handleClose = () => {
        navigate("/seller/my-store");
    };


   

    const handleContinue = () => {

        
        if (quantity <= 0) {
            alert(
                "Please enter a quantity greater than 0."
            );
            return;
        }

        
        if (!minPrice) {
            alert("Please enter minimum price.");
            return;
        }

       
        if (!maxPrice) {
            alert("Please enter maximum price.");
            return;
        }

        
        if (Number(minPrice) > Number(maxPrice)) {
            alert(
                "Minimum price cannot be greater than maximum price."
            );
            return;
        }

        const productDetails = {

            
            ...previousProductData,

            quantity,

            pricing: {
                minPrice,
                maxPrice,
                negotiable,
            },

            delivery: {
                freeDelivery,
            },

            condition,

            photos,

            video: productVideo,

            description: description.trim(),
        };

        console.log(
            "Final Product Details:",
            productDetails
        );

        navigate(
            "/product-preview",
            {
                state: productDetails,
            }
        );
    };


    return (
        <div className="refined-product-page">

            
            <div className="refined-header">

                <button
                    type="button"
                    className="close-button"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    ×
                </button>


               
                <div className="category-progress-section">

                    <div className="category-progress-text">

                        <span>
                            Step 4 of 5
                        </span>

                        <span>
                            Add Details
                        </span>

                    </div>


                    <div className="category-progress-bars">

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar"></span>

                    </div>

                </div>

            </div>


            
            <main className="refined-main-content">


                

                <section className="quantity-section">

                    <h2 className="quantity-heading">
                        Quantity Available
                    </h2>


                    <div className="quantity-control">

                        <button
                            type="button"
                            className="quantity-btn"
                            onClick={decreaseQuantity}
                            disabled={quantity === 0}
                        >
                            −
                        </button>


                        <div className="quantity-value">

                            <span className="quantity-number">
                                {quantity}
                            </span>

                            <span className="quantity-unit">
                                Tons
                            </span>

                        </div>


                        <button
                            type="button"
                            className="quantity-btn quantity-increase"
                            onClick={increaseQuantity}
                        >
                            +
                        </button>

                    </div>


                    <div className="quantity-info">
                        Unit adjusted based on category
                        {previousProductData.category
                            ? ` (${previousProductData.category})`
                            : ""}
                    </div>

                </section>


                

                <section className="pricing-section">

                    <h2 className="refined-section-heading">
                        Pricing
                    </h2>


                    <div className="pricing-container">

                        <div className="price-input-box">

                            <span className="price-currency">
                                ₹
                            </span>

                            <input
                                type="number"
                                min="0"
                                placeholder="Min"
                                value={minPrice}
                                onChange={(event) =>
                                    setMinPrice(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        <span className="price-dash">
                            -
                        </span>


                        

                        <div className="price-input-box">

                            <input
                                type="number"
                                min="0"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={(event) =>
                                    setMaxPrice(
                                        event.target.value
                                    )
                                }
                            />

                            <span className="price-unit">
                                / Ton
                            </span>

                        </div>

                    </div>


                  

                    <label className="negotiable-option">

                        <input
                            type="checkbox"
                            checked={negotiable}
                            onChange={(event) =>
                                setNegotiable(
                                    event.target.checked
                                )
                            }
                        />

                        <span>
                            Price is negotiable
                        </span>

                    </label>

                </section>


              

                <section className="delivery-section">

                    <h2 className="refined-section-heading">
                        Delivery Options
                    </h2>


                    <div className="delivery-option-box">

                        <div className="delivery-option-left">

                            <img
                                src={truck}
                                alt="Delivery"
                            />

                            <span>
                                Free Delivery
                            </span>

                        </div>


                        <button
                            type="button"
                            className={`delivery-toggle ${
                                freeDelivery
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setFreeDelivery(
                                    (prev) => !prev
                                )
                            }
                            aria-pressed={freeDelivery}
                        >
                            <span></span>
                        </button>

                    </div>

                </section>


                

                <section className="condition-section">

                    <h2 className="refined-section-heading">
                        Product Condition
                    </h2>


                    <div className="condition-container">

                        <button
                            type="button"
                            className={`condition-button ${
                                condition === "new"
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setCondition("new")
                            }
                        >
                            Brand New
                        </button>


                        <button
                            type="button"
                            className={`condition-button ${
                                condition ===
                                "refurbished"
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setCondition(
                                    "refurbished"
                                )
                            }
                        >
                            Refurbished
                        </button>

                    </div>

                </section>


                

                <section className="photos-section">

                    <h2 className="refined-section-heading">
                        Product Photos
                    </h2>


                    <div className="photos-container">


                        

                        {photos.length < 5 && (

                            <button
                                type="button"
                                className="photo-upload-button"
                                onClick={() =>
                                    photoInputRef.current?.click()
                                }
                            >

                                <img
                                    src={cameraicon}
                                    alt="Upload"
                                />

                                <span>
                                    Upload
                                </span>

                            </button>

                        )}


                        
                        <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={handlePhotoUpload}
                        />


                        

                        <div className="product-photo-box">

                            <img
                                src={wheatimage}
                                alt="Wheat product"
                            />

                        </div>



                        <div className="product-photo-box">

                            <img
                                src={mountain}
                                alt="Product"
                            />

                        </div>


                      

                        {photos.map((photo, index) => (

                            <div
                                className="product-photo-box"
                                key={`${photo.file.name}-${index}`}
                            >

                                <img
                                    src={photo.preview}
                                    alt={`Uploaded product ${index + 1}`}
                                />


                                <button
                                    type="button"
                                    className="product-photo-remove"
                                    onClick={() =>
                                        removePhoto(index)
                                    }
                                    aria-label="Remove photo"
                                >
                                    ×
                                </button>

                            </div>

                        ))}

                    </div>


                    <p className="refined-helper-text">
                        Add up to 5 photos. Clear, bright
                        photos attract more buyers.
                    </p>

                </section>


                
                <section className="video-section">

                    <h2 className="refined-section-heading">
                        Product Video
                    </h2>


                    <div className="video-container">

                        <button
                            type="button"
                            className="video-upload-button"
                            onClick={() =>
                                videoInputRef.current?.click()
                            }
                        >

                           

                            <FiVideo
                                className="video-icon"
                            />


                            <span>
                                {productVideo
                                    ? "Change Video"
                                    : "Upload Video"}
                            </span>

                        </button>


                        <input
                            ref={videoInputRef}
                            type="file"
                            accept="video/*"
                            hidden
                            onChange={handleVideoUpload}
                        />

                    </div>


                   

                    {productVideo && (

                        <div className="selected-video-info">

                            <div className="selected-video-name">

                                <FiVideo />

                                <span>
                                    {productVideo.name}
                                </span>

                            </div>


                            <button
                                type="button"
                                className="remove-video-button"
                                onClick={removeVideo}
                            >
                                ×
                            </button>

                        </div>

                    )}


                    <p className="refined-helper-text">
                        Add a short video to showcase
                        product quality in action.
                    </p>

                </section>


               
                <section className="description-section">

                    <h2 className="refined-section-heading">
                        Description (Optional)
                    </h2>


                    <textarea
                        value={description}
                        onChange={(event) =>
                            setDescription(
                                event.target.value
                            )
                        }
                        placeholder="Add details about quality, variety, packaging..."
                    />

                </section>

            </main>


            
            <div className="refined-bottom-action">

                <button
                    type="button"
                    className="refined-continue-button"
                    onClick={handleContinue}
                >

                    <span>
                        Continue to Preview
                    </span>

                    <span className="continue-arrow">
                        →
                    </span>

                </button>

            </div>

        </div>
    );
}

export default AddProductRefined;