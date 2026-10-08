import "./SellerHeader.css";

import logo from "../../assets/logo.jpg";

import { FiShoppingBag, FiBox, FiCompass } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

function SellerHeader() {

    const navigate = useNavigate();

    return (
        <header className="seller-header">

            <div className="seller-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div
                className="seller-header-item"
                onClick={() => navigate("/seller/my-store")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate("/seller/my-store");
                    }
                }}
            >
                <FiShoppingBag className="seller-header-icon" />

                <div>
                    <strong>My Store</strong>
                    <small>Sell Inventory</small>
                </div>
            </div>

            <div className="seller-header-item">
                <FiBox className="seller-header-icon" />

                <div>
                    <strong>BidBox</strong>
                    <small>Live Bids</small>
                </div>
            </div>

            <div className="seller-header-item">
                <FiCompass className="seller-header-icon" />

                <div>
                    <strong>Explore</strong>
                    <small>Watch Demand</small>
                </div>
            </div>

        </header>
    );
}

export default SellerHeader;