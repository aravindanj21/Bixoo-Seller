import { useState } from "react";

import "./MyOffers.css";

import tomatoes from "../../assets/tomato.jpg";
import rice from "../../assets/rice.jpg";

function MyOffers({ searchTerm }) {

    const [offers, setOffers] = useState([
        {
            id: 1,
            name: "100 Kg Tomatoes",
            price: 120,
            status: "Negotiation",
            image: tomatoes
        },
        {
            id: 2,
            name: "500 Kg Rice",
            price: 320,
            status: "Accepted",
            image: rice
        }
    ]);


    const filteredOffers = offers.filter((offer) =>
        offer.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );


    const acceptOffer = (id) => {

        setOffers((previousOffers) =>
            previousOffers.map((offer) =>
                offer.id === id
                    ? {
                        ...offer,
                        status: "Accepted"
                    }
                    : offer
            )
        );

    };


    return (
        <section className="dashboard-section">

            <div className="section-heading">

                <h3>My Offers</h3>

                <button
                    onClick={() =>
                        alert("Showing all offers")
                    }
                >
                    View All
                </button>

            </div>


            <div className="offers-list">

                {filteredOffers.map((offer) => (

                    <div
                        className="offer-card"
                        key={offer.id}
                    >

                        <img
                            src={offer.image}
                            alt={offer.name}
                        />


                        <div className="offer-details">

                            <strong>
                                {offer.name}
                            </strong>

                            <span>
                                Offer Price: ${offer.price}
                            </span>

                        </div>


                        <span
                            className={
                                offer.status === "Accepted"
                                    ? "accepted"
                                    : "negotiation"
                            }
                            onClick={() =>
                                acceptOffer(offer.id)
                            }
                        >

                            {offer.status}

                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default MyOffers;