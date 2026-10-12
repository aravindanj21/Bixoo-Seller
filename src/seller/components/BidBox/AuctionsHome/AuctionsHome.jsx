import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiClock, FiChevronDown, FiChevronRight } from "react-icons/fi";
import "./AuctionsHome.css";

const auctionData = [
  {
    id: 1,
    title: "Premium Basmati Rice",
    description: "Grade A • 500 Qtl Available",
    status: "active",
    highBid: "2,850",
    totalBids: 18,
    timeLeft: "02:14:36",
  },
  {
    id: 2,
    title: "Premium Coffee Beans",
    description: "Arabica • 200 Qtl",
    status: "completed",
    winner: "Kiran Wholesalers",
    finalPrice: "5,200",
    profit: "1,200",
    profitPercent: "+23%",
    date: "18 Aug 2026",
  },
];

function AuctionsHome() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("active");
  const [showFilter, setShowFilter] = useState(false);

  const filteredAuctions = auctionData.filter(
    (auction) =>
      activeTab === "active"
        ? true
        : auction.status === "completed"
  );

  return (
    <main className="auctions-home">

      <header className="auctions-page-header">
        <h1>Auctions</h1>
        <p>Manage your active bids and past sales.</p>
      </header>

      <button
        type="button"
        className="create-auction-card"
        onClick={() => navigate("/bidbox/create-auction")}
      >
        <span className="create-auction-icon">
          <FiPlus />
        </span>

        <span className="create-auction-text">
          <strong>Create New Auction</strong>
          <small>
            Start accepting bids from verified buyers.
          </small>
        </span>
      </button>

      <section className="my-auctions-section">

        <div className="my-auctions-heading">
          <h2>My Auctions</h2>

          <div className="auction-filter-wrapper">
            <button
              type="button"
              className="auction-filter-button"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter <FiChevronDown />
            </button>

            {showFilter && (
              <div className="auction-filter-menu">
                <button onClick={() => {
                  setActiveTab("active");
                  setShowFilter(false);
                }}>
                  Active
                </button>

                <button onClick={() => {
                  setActiveTab("completed");
                  setShowFilter(false);
                }}>
                  Completed
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="auction-tabs">
          <button
            type="button"
            className={activeTab === "active" ? "selected" : ""}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>

          <button
            type="button"
            className={activeTab === "completed" ? "selected" : ""}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <div className="auction-cards-grid">
          {filteredAuctions.map((auction) => (
            <article
              key={auction.id}
              className={`auction-card ${auction.status === "completed" ? "completed-card" : ""}`}
            >
              <div className="auction-image-area">
                <span
                  className={`auction-status-badge ${auction.status}`}
                >
                  {auction.status === "active" ? "● Live Now" : "Sold"}
                </span>
              </div>

              <div className="auction-card-content">
                <div className="auction-product-info">
                  <h3>{auction.title}</h3>
                  <p>{auction.description}</p>
                </div>

                {auction.status === "active" ? (
                  <>
                    <div className="auction-bid-summary">
                      <div>
                        <p>Current High Bid</p>
                        <div className="auction-price">
                          ₹ {auction.highBid}
                          <span> / Qtl</span>
                        </div>
                      </div>

                      <div className="auction-total-bids">
                        <p>Total Bids</p>
                        <strong>{auction.totalBids} Bids</strong>
                      </div>
                    </div>

                    <div className="auction-card-footer">
                      <span className="auction-time">
                        <FiClock /> {auction.timeLeft}
                      </span>

                      <button
                        type="button"
                        onClick={() => navigate(`/bidbox/auction/${auction.id}`)}
                      >
                        View Details <FiChevronRight />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="auction-result-summary">
                      <div className="auction-result-row">
                        <span>Winner</span>
                        <strong>{auction.winner}</strong>
                      </div>

                      <div className="auction-result-row">
                        <span>Final Price</span>
                        <strong>₹ {auction.finalPrice} / Qtl</strong>
                      </div>

                      <div className="auction-result-row">
                        <span>Profit</span>
                        <strong className="auction-profit">
                          ₹ {auction.profit}
                          <small>{auction.profitPercent}</small>
                        </strong>
                      </div>
                    </div>

                    <div className="auction-card-footer">
                      <span>{auction.date}</span>

                      <button
                        type="button"
                        onClick={() => navigate(`/bidbox/auction/${auction.id}`)}
                      >
                        View Receipt <FiChevronRight />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AuctionsHome;