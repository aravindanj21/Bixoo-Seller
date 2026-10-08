import {
    useLocation,
    useNavigate
} from "react-router-dom";

import { useState } from "react";

import "./ProductPreview.css";

import {
    FiPackage,
    FiTruck,
    FiMapPin,
    FiDroplet,
    FiShoppingBag,
    FiPlay,
} from "react-icons/fi";

import { MdOutlineVerified } from "react-icons/md";

import wheatbag from "../../../assets/wheatbag.jpg";


function ProductPreview() {

    const navigate = useNavigate();
    const location = useLocation();


    

    const productData = location.state || {};


    
    const category = productData.category || "";

const productName = productData.productName || "";

const description = productData.description || "";

const quantity = productData.quantity ?? 0;

const minPrice = productData.pricing?.minPrice ?? "";

const maxPrice = productData.pricing?.maxPrice ?? "";

const negotiable = productData.pricing?.negotiable ?? false;

const freeDelivery = productData.delivery?.freeDelivery ?? false;

const condition = productData.condition || "";

const uploadedPhotos = productData.photos || [];

const productVideo = productData.video || null;

const customProductImage = productData.selectedImage || null;



const categoryUnits = {
    Agriculture: {
        quantityUnit: "Tons",
        priceUnit: "Ton",
    },

    Vehicles: {
        quantityUnit: "Units",
        priceUnit: "Unit",
    },

    Machinery: {
        quantityUnit: "Units",
        priceUnit: "Unit",
    },

    Electronics: {
        quantityUnit: "Pieces",
        priceUnit: "Piece",
    },

    "Raw Materials": {
        quantityUnit: "Kg",
        priceUnit: "Kg",
    },

    "Other Categories": {
        quantityUnit: "Units",
        priceUnit: "Unit",
    },
};

const currentUnit = categoryUnits[category];

const quantityUnit =
    productData.quantityUnit ||
    currentUnit?.quantityUnit ||
    "";

const priceUnit =
    productData.pricing?.priceUnit ||
    currentUnit?.priceUnit ||
    "";
    

    const photoList = [];

    if (customProductImage) {
        photoList.push(customProductImage);
    }

    uploadedPhotos.forEach((photo) => {
        if (photo?.preview) {
            photoList.push(photo.preview);
        }
    });


    
    if (photoList.length === 0) {
        photoList.push(wheatbag);
    }


    

    const [selectedImage, setSelectedImage] =
    useState(photoList[0]);


    

    const handleClose = () => {
        navigate("/seller/my-store");
    };


    

    const handleAddToStore = () => {

        const finalProduct = {
            category,
            productName,
            description,
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

            photos: photoList,

            video: productVideo,

            status: "Live",
        };


        console.log(
            "Product added to store:",
            finalProduct
        );


        


        navigate("/seller/my-store", {
            state: {
                newProduct: finalProduct,
            },
        });
    };


    return (

        <div className="product-preview-page">


           

            <div className="preview-header">


                
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
                            Step 5 of 5
                        </span>

                        <span>
                            Preview
                        </span>

                    </div>


                    <div className="category-progress-bars">

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                        <span className="category-progress-bar active"></span>

                    </div>

                </div>

            </div>


           

            <main className="preview-main">


               
                <section className="preview-introduction">

                    <h1>
                        Preview & Confirm
                    </h1>

                    <p>
                        Review your product details before
                        publishing it to your store.
                    </p>

                </section>


                

                <section className="preview-product-stack">


                    

                    <div className="preview-title-section">

                        <div className="preview-category">
                            {category}
                        </div>

                        <h2>
                            {productName}
                        </h2>

                        <p>
                            {description}
                        </p>

                    </div>


                    

                    <div className="preview-image-wrapper">

                        <img
                            src={selectedImage}
                            alt={productName}
                            className="preview-main-image"
                        />


                        <div className="preview-ready-badge">

                            <span className="ready-icon">
                                ✓
                            </span>

                            Ready

                        </div>

                    </div>


                    

                    <div className="preview-thumbnails">


                        {photoList.map(
                            (photo, index) => (

                                <button
                                    type="button"
                                    key={index}
                                    className={`preview-thumbnail ${
                                        selectedImage === photo
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedImage(
                                            photo
                                        )
                                    }
                                >

                                    <img
                                        src={photo}
                                        alt={`${productName} ${index + 1}`}
                                    />

                                </button>

                            )
                        )}


                       
                        {productVideo && (

                            <button
                                type="button"
                                className="preview-video-thumbnail"
                                onClick={() => {
                                    console.log(
                                        "Selected video:",
                                        productVideo
                                    );
                                }}
                            >

                                <FiPlay
                                    className="video-play"
                                />

                                <span>
                                    Video
                                </span>

                            </button>

                        )}

                    </div>


                    

                    <div className="preview-card price-card">


                        <span className="preview-card-label">
                            Base Price
                        </span>


                        <div className="preview-price">

                            ₹ {minPrice}

                            {maxPrice && (
                                <>
                                    {" - "}
                                    ₹ {maxPrice}
                                </>
                            )}

                            <small>
                             / {priceUnit}
                            </small>

                        </div>


                        

                        {negotiable && (

                            <span className="preview-negotiable">
                                Negotiable
                            </span>

                        )}


                        <div className="preview-card-divider"></div>


                        <div className="preview-stock-row">

                            <span>
                                Stock Quantity
                            </span>

                            <strong>
                             {quantity} {quantityUnit}
                            </strong>
                        </div>

                    </div>


                    

                    <div className="preview-card details-card">


                        
                        <div className="detail-block">

                            <span className="detail-label">

                                <FiPackage
                                    className="detail-icon"
                                />

                                Available Quantity

                            </span>

                            <strong>
                             {quantity} {quantityUnit}
                            </strong>

                        </div>


                        

                        <div className="detail-block">

                            <span className="detail-label">

                                <FiTruck
                                    className="detail-icon"
                                />

                                Delivery Options

                            </span>

                            <strong>

                                {freeDelivery
                                    ? "Free Delivery"
                                    : "Standard Delivery"}

                            </strong>

                        </div>



                        <div className="detail-block">

                            <span className="detail-label">

                                <FiMapPin
                                    className="detail-icon"
                                />

                                Category

                            </span>

                            <div className="origin-row">

                                <strong>
                                    {category}
                                </strong>

                            </div>

                        </div>


                        <div className="preview-card-divider"></div>


                        

                        <div className="preview-bottom-details">


                            <div className="bottom-detail">

                                <span className="bottom-detail-label">

                                    <FiDroplet
                                        className="detail-icon"
                                    />

                                    Price Type

                                </span>

                                <strong>
                                    {negotiable
                                        ? "Negotiable"
                                        : "Fixed"}
                                </strong>

                            </div>


                            <div className="bottom-detail">

                                <span className="bottom-detail-label">

                                    <MdOutlineVerified
                                        className="detail-icon"
                                    />

                                    Condition

                                </span>

                                <strong>

                                    {condition === "new"
                                        ? "Brand New"
                                        : "Refurbished"}

                                </strong>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


           
            <div className="preview-bottom-action">

                <button
                    type="button"
                    className="add-store-button"
                    onClick={handleAddToStore}
                >

                    <FiShoppingBag
                        className="add-store-icon"
                    />

                    Add to My Store

                </button>

            </div>

        </div>
    );
}


export default ProductPreview;