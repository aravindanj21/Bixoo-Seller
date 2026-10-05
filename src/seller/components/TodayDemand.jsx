import { useState } from "react";

import "./TodayDemand.css";

import onions from "../../assets/onion.jpg";
import tomatoes from "../../assets/tomato.jpg";

function TodayDemand({ searchTerm }) {

    const [todayDemands] = useState([
        {
            id: 1,
            name: "Onions",
            image: onions
        },
        {
            id: 2,
            name: "Tomatoes",
            image: tomatoes
        },
        {
            id: 3,
            name: "Onions",
            image: onions
        }
    ]);


    const filteredDemands = todayDemands.filter((item) =>
        item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );


    return (
        <section className="dashboard-section">

            <div className="section-heading">

                <h3>Today's Demands</h3>

                <button
                    onClick={() =>
                        alert("Showing today's demands")
                    }
                >
                    View All
                </button>

            </div>


            <div className="today-demand-list">

                {filteredDemands.map((item) => (

                    <div
                        className="today-demand-card"
                        key={item.id}
                        onClick={() =>
                            alert(`Selected ${item.name}`)
                        }
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <strong>
                            {item.name}
                        </strong>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default TodayDemand;