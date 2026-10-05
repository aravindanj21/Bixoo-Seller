import "./SellerHeader.css";
import logo from "../../assets/logo.jpg";
import Icon from "../../assets/Icon.png"
import boxicon from "../../assets/boxicon.png"
import exploreicon from "../../assets/exploreicon.png"

function SellerHeader() {
    return (
        <header className="seller-header">

            <div className="seller-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="seller-header-item">
                <img src={Icon} alt="Logo" />
                <div>
                    <strong>My Store</strong>
                    <small>Sell Inventory</small>
                </div>
            </div>

            <div className="seller-header-item">
               <img src={boxicon} alt="Logo" />

                <div>
                    <strong>BidBox</strong>
                    <small>Live Bids</small>
                </div>
            </div>

            <div className="seller-header-item">
                <img src={exploreicon} alt="Logo" />

                <div>
                    <strong>Explore</strong>
                    <small>Watch Demand</small>
                </div>
            </div>

        </header>
    );
}

export default SellerHeader;