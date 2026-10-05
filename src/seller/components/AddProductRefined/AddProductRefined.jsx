import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProductRefined.css";


import truck from "../../../assets/truck.png";
import cameraicon from "../../../assets/cameraicon.png";
import wheatimage from "../../../assets/wheatimage.jpg";
import mountain from "../../../assets/mountain.png";
import video from "../../../assets/video.png"



function AddProductRefined() {

    const navigate = useNavigate();

    

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

        const files = Array.from(event.target.files);

        const availableSlots = 5 - photos.length;

        const selectedFiles = files.slice(
            0,
            availableSlots
        );

        const newPhotos = selectedFiles.map((file) => ({
            file: file,
            preview: URL.createObjectURL(file),
        }));

        setPhotos((prev) => [
            ...prev,
            ...newPhotos,
        ]);
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


    

    const [video, setVideo] = useState(null);

    const videoInputRef = useRef(null);

    const handleVideoUpload = (event) => {

        const file = event.target.files[0];

        if (file) {
            setVideo(file);
        }
    };


    

    const [description, setDescription] =
        useState("");


    
    const handleCancel = () => {
        navigate("/my-store");
    };




    const handleContinue = () => {

        const productDetails = {

            quantity: quantity,

            pricing: {
                minPrice: minPrice,
                maxPrice: maxPrice,
                negotiable: negotiable,
            },

            delivery: {
                freeDelivery: freeDelivery,
            },

            condition: condition,

            photos: photos,

            video: video,

            description: description,
        };


        console.log(
            "Product Details:",
            productDetails
        );


        

        navigate("/product-preview");
    };


    return (

        <div className="refined-product-page">


            

            <div className="refined-top-nav">


                <button
                    type="button"
                    className="refined-back-btn"
                    onClick={() => navigate(-1)}
                >
                    ←
                </button>


                <h1 className="refined-page-title">
                    Add Details
                </h1>


                <button
                    type="button"
                    className="refined-cancel-btn"
                    onClick={handleCancel}
                >
                    Cancel
                </button>


            </div>



            

            <div className="refined-progress-container">


                <div
                    className="refined-progress-step completed"
                ></div>


                <div
                    className="refined-progress-step completed"
                ></div>


                <div
                    className="refined-progress-step active"
                ></div>


                <div
                    className="refined-progress-step"
                ></div>


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
                        Unit adjusted based on category (Wheat)
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
                            className={
                                `delivery-toggle ${
                                    freeDelivery
                                        ? "active"
                                        : ""
                                }`
                            }
                            onClick={() =>
                                setFreeDelivery(
                                    (prev) => !prev
                                )
                            }
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
                            className={
                                `condition-button ${
                                    condition === "new"
                                        ? "active"
                                        : ""
                                }`
                            }
                            onClick={() =>
                                setCondition("new")
                            }
                        >
                            Brand New
                        </button>



                        <button
                            type="button"
                            className={
                                `condition-button ${
                                    condition ===
                                    "refurbished"
                                        ? "active"
                                        : ""
                                }`
                            }
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

            <span>Upload</span>
        </button>

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
                alt="Product"
            />

            <button
                type="button"
                className="product-photo-remove"
            >
                ×
            </button>

        </div>


        
        <div className="product-photo-box">

            <img
                src={mountain}
                alt="Product"
            />

        </div>

    </div>

    <p className="refined-helper-text">
        Add up to 5 photos. Clear, bright photos attract more
        buyers.
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

            <img
                src={video}
                alt="Upload Video"
                className="video-icon"
            />

            <span>
                Upload Video
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

        <p className="refined-helper-text">
        Add a short video to showcase product quality in action.
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
                        placeholder={
                            `Add details about quality, variety,
packaging...`
                        }
                    />


                </section>


            </main>



           
            <div className="refined-bottom-space">
            </div>



            
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