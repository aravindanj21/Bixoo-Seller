import "./StoreOverview.css";

function StoreOverview() {

    const overview = [
        {
            value: "24",
            label: "Total Products"
        },
        {
            value: "12",
            label: "Pending Orders"
        },
        {
            value: "08",
            label: "Active Auctions"
        },
        {
            value: "4.8",
            label: "Store Rating"
        }
    ];

    return (
        <section className="dashboard-section store-section">

            <div className="section-heading">
                <h3>Store Overview</h3>
            </div>

            <div className="overview-grid">

                {overview.map((item) => (
                    <div
                        className="overview-card"
                        key={item.label}
                    >
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default StoreOverview;