import { useState } from "react";

import "./MatchingDemand.css";

import onions from "../../assets/onion.jpg";
import tomatoes from "../../assets/tomato.jpg";

function MatchingDemand({ searchTerm }) {

    const [demands] = useState([
        {
            id: 1,
            name: "100 Kg Onions",
            date: "Today",
            status: "New Match",
            image: onions
        },
        {
            id: 2,
            name: "50 Kg Tomatoes",
            date: "Today",
            status: "Urgent",
            image: tomatoes
        }
    ]);


    const filteredDemands = demands.filter((demand) =>
        demand.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );


    const handleDemandClick = (demand) => {

        alert(
            `Selected demand: ${demand.name}`
        );

    };


    return (
        <section className="dashboard-section">

            <div className="section-heading">

                <h3>Matching Demands</h3>

                <button
                    onClick={() =>
                        alert("Showing all demands")
                    }
                >
                    View All
                </button>

            </div>


            <div className="demand-list">

                {filteredDemands.length > 0 ? (

                    filteredDemands.map((demand) => (

                        <div
                            className="demand-card"
                            key={demand.id}
                            onClick={() =>
                                handleDemandClick(demand)
                            }
                        >

                            <img
                                src={demand.image}
                                alt={demand.name}
                            />

                            <div className="demand-info">

                                <strong>
                                    {demand.name}
                                </strong>

                                <span>
                                    {demand.date}
                                </span>

                            </div>


                            <p
                                className={
                                    demand.status === "Urgent"
                                        ? "urgent"
                                        : "new-match"
                                }
                            >

                                {demand.status}

                            </p>

                        </div>

                    ))

                ) : (

                    <p>No matching demands found.</p>

                )}

            </div>

        </section>
    );
}

export default MatchingDemand;