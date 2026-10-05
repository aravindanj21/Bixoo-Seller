import "./ProductCard.css";

function ProductCard({
    image,
    category,
    name,
    quantity,
    price,
    unit,
    available = true,
    hidden = false
}) {

    return (
        <div
            className={`product-card ${hidden ? "hidden-product" : ""}`}
        >

           
            <div className="product-image-container">

                <img
                    src={image}
                    alt={name}
                    className="product-image"
                />

                <div className="product-status">
                    <span
                        className={`status-dot ${
                            hidden ? "hidden-dot" : ""
                        }`}
                    ></span>

                    {hidden ? "Hidden" : "Live"}
                </div>

            </div>


            
            <div className="product-info">

                <p className="product-category">
                    {category}
                </p>

                <h3 className="product-name">
                    {name}
                    {quantity && ` (${quantity})`}
                </h3>

                <div className="product-price">
                    ₹{price}
                    <span> / {unit}</span>
                </div>

            </div>


            
            <div className="product-availability">

                <span>
                    {available ? "Available" : "Unavailable"}
                </span>

                <label className="availability-switch">

                    <input
                        type="checkbox"
                        checked={available}
                        readOnly
                    />

                    <span className="availability-slider"></span>

                </label>

            </div>

        </div>
    );
}

export default ProductCard;