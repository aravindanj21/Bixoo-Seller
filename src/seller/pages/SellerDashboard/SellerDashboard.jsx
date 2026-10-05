import { useState } from "react";

import SellerHeader from "../../components/SellerHeader";
import SellerSearchBar from "../../components/SellerSearchbar";
import MatchingDemand from "../../components/MatchingDemand";
import MyOffers from "../../components/MyOffers";
import TodayDemand from "../../components/TodayDemand";
import StoreOverview from "../../components/StoreOverview";
import SellerBottomNavbar from "../../components/SellerBottomNavbar";

import "./SellerDashboard.css";

function SellerDashboard() {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="seller-dashboard">

            <SellerHeader />

            <div className="seller-dashboard-content">

                <SellerSearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <MatchingDemand searchTerm={searchTerm} />

                <MyOffers searchTerm={searchTerm} />

                <TodayDemand searchTerm={searchTerm} />

                <StoreOverview />

                <SellerBottomNavbar />

            </div>

        </div>
    );
}

export default SellerDashboard;