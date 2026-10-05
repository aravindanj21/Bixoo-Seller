import { useState } from "react";
import "./SellerSearchBar.css";

function SellerSearchBar({ searchTerm, setSearchTerm }) {

    const [showFilter, setShowFilter] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const [messageCount, setMessageCount] = useState(2);


    
    const handleFilter = () => {
        setShowFilter(!showFilter);
    };


    
    const handleNotification = () => {
        alert("Opening notifications");
        setNotificationCount(0);
    };


    
    const handleMessages = () => {
        alert("Opening messages");
        setMessageCount(0);
    };


    
    const handleProfile = () => {
        alert("Opening seller profile");
    };


    return (
        <>
            <div className="seller-search-container">

                
                <div className="seller-search-box">

                    <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="7" />

                        <line
                            x1="16.5"
                            y1="16.5"
                            x2="21"
                            y2="21"
                        />
                    </svg>


                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />


                    
                    <svg
                        className="filter-icon"
                        onClick={handleFilter}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line
                            x1="4"
                            y1="6"
                            x2="20"
                            y2="6"
                        />

                        <circle
                            cx="9"
                            cy="6"
                            r="2"
                            fill="white"
                        />

                        <line
                            x1="4"
                            y1="12"
                            x2="20"
                            y2="12"
                        />

                        <circle
                            cx="15"
                            cy="12"
                            r="2"
                            fill="white"
                        />

                        <line
                            x1="4"
                            y1="18"
                            x2="20"
                            y2="18"
                        />

                        <circle
                            cx="10"
                            cy="18"
                            r="2"
                            fill="white"
                        />
                    </svg>

                </div>


               
                <button
                    className="seller-round-button"
                    onClick={handleNotification}
                >

                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                        <path d="M10 21h4" />
                    </svg>


                    {notificationCount > 0 && (
                        <span className="red-dot"></span>
                    )}

                </button>


                
                <button
                    className="seller-round-button"
                    onClick={handleMessages}
                >

                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M4 4h16v13H7l-3 3z" />

                        <line
                            x1="8"
                            y1="8"
                            x2="16"
                            y2="8"
                        />

                        <line
                            x1="8"
                            y1="12"
                            x2="15"
                            y2="12"
                        />
                    </svg>


                    {messageCount > 0 && (
                        <span className="green-dot"></span>
                    )}

                </button>


                
                <button
                    className="seller-round-button"
                    onClick={handleProfile}
                >

                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle
                            cx="12"
                            cy="8"
                            r="3"
                        />

                        <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
                    </svg>

                </button>

            </div>


          

            {showFilter && (

                <div className="seller-filter-box">

                    <button>All</button>

                    <button>Vegetables</button>

                    <button>Rice</button>

                    <button>Urgent</button>

                </div>

            )}

        </>
    );
}

export default SellerSearchBar;