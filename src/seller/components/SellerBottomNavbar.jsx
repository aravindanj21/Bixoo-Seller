import "./SellerBottomNavbar.css";
import leadicon from "../../assets/leadicon.png";
import dealsicon from "../../assets/dealsicon.png";
import Margin from "../../assets/Margin.png";

function SellerBottomNavbar() {
    return (
        <nav className="seller-bottom-navbar">

            <div className="bottom-menu">

                <button className="bottom-item active">
                   <img src={leadicon} alt="Logo" />
                    Leads
                </button>

                <button className="bottom-item">
                     <img src={dealsicon} alt="Logo" />
                    Deals
                </button>

            </div>

            <button className="buyer-button">
                 <img src={Margin} alt="Logo" />
                <small>BUYER</small>
            </button>

        </nav>
    );
}

export default SellerBottomNavbar;