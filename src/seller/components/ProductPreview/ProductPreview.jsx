import { useNavigate } from "react-router-dom";
import "./ProductPreview.css";


import wheatbag from "../../../assets/wheatbag.jpg";
import wheatimage from "../../../assets/wheatimage.jpg";

function ProductPreview() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleAddToStore = () => {
        console.log("Product added to store");

        
        navigate("/my-store");
    };

    return (
        <div className="product-preview-page">

            
            <header className="preview-top-nav">

                <button
                    className="preview-nav-btn"
                    onClick={handleBack}
                    aria-label="Go back"
                >
                    ←
                </button>

                <div className="preview-logo">
                    bixoo
                </div>

                <button
                    className="preview-more-btn"
                    aria-label="More options"
                >
                    ⋮
                </button>

            </header>


           
            <main className="preview-main">

               
                <section className="preview-progress">

                    <div className="preview-progress-text">
                        <span>Step 4 of 4</span>
                        <span className="preview-step-name">
                            Preview
                        </span>
                    </div>

                    <div className="preview-progress-track">
                        <div className="preview-progress-fill"></div>
                    </div>

                </section>


                
                <section className="preview-introduction">

                    <h1>Preview & Confirm</h1>

                    <p>
                        Review your product details before publishing it to
                        your store.
                    </p>

                </section>


               
                <section className="preview-product-stack">

                    
                    <div className="preview-title-section">

                        <div className="preview-category">
                            Grains & Cereals
                        </div>

                        <h2>
                            Premium Organic Sharbati Wheat
                        </h2>

                        <p>
                            Grade A, Export Quality
                        </p>

                    </div>


                    
                    <div className="preview-image-wrapper">

                        <img
                            src={wheatbag}
                            alt="Premium Organic Sharbati Wheat"
                            className="preview-main-image"
                        />

                        <div className="preview-ready-badge">
                            <span className="ready-icon">✓</span>
                            Ready
                        </div>

                    </div>


                    
                    <div className="preview-thumbnails">

                        <button className="preview-thumbnail active">
                            <img
                                src={wheatbag}
                                alt="Wheat view 1"
                            />
                        </button>

                        <button className="preview-thumbnail">
                            <img
                                src={wheatbag}
                                alt="Wheat view 2"
                            />
                        </button>

                        <button className="preview-video-thumbnail">

                            <span className="video-play">
                                ▶
                            </span>

                            <span>Video</span>

                        </button>

                    </div>


                    
                    <div className="preview-card price-card">

                        <span className="preview-card-label">
                            Base Price
                        </span>

                        <div className="preview-price">
                            ₹ 2,400 - ₹ 2,600
                            <small>/qtl</small>
                        </div>

                        <div className="preview-card-divider"></div>

                        <div className="preview-stock-row">

                            <span>Stock Quantity</span>

                            <strong>
                                5,000 quintals
                            </strong>

                        </div>

                    </div>


                    
                    <div className="preview-card details-card">

                        
                        <div className="detail-block">

                            <span className="detail-label">
                                ▣ Minimum Order
                            </span>

                            <strong>
                                50 Quintals
                            </strong>

                        </div>


                        
                        <div className="detail-block">

                            <span className="detail-label">
                                ▱ Delivery Options
                            </span>

                            <strong>
                                Pickup, Transport, Free
                            </strong>

                        </div>


                       
                        <div className="detail-block">

                            <span className="detail-label">
                                ◉ Origin
                            </span>

                            <div className="origin-row">

                                <strong>
                                    Madhya Pradesh
                                </strong>

                                <span className="map-icon">
                                    ♧
                                </span>

                            </div>

                        </div>


                        <div className="preview-card-divider"></div>


                        
                        <div className="preview-bottom-details">

                            <div className="bottom-detail">

                                <span className="bottom-detail-label">
                                    △ Moisture Content
                                </span>

                                <strong>
                                    &lt; 12%
                                </strong>

                            </div>


                            <div className="bottom-detail">

                                <span className="bottom-detail-label">
                                    ♢ Condition
                                </span>

                                <strong>
                                    Brand New
                                </strong>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


          
            <div className="preview-bottom-action">

                <button
                    className="add-store-button"
                    onClick={handleAddToStore}
                >
                    <span>▣</span>
                    Add to My Store
                </button>

            </div>

        </div>
    );
}

export default ProductPreview;