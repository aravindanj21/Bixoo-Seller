import "./MyStore.css";

import AddProduct from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";

import grains from "../../../assets/grains.jpg";
import material from "../../../assets/material.jpg"
import freshproduct from "../../../assets/freshproduct.jpg";
import edibleoils from "../../../assets/edibleoils.jpg";



function MyStore() {

    return (
        <div className="my-store">

            <div className="my-store-header">
                <h2>My Store</h2>

                <p>
                    Manage your active inventory and listings.
                </p>
            </div>


            <AddProduct />


            <ProductCard
                image={grains}
                category="Grains & Cereals"
                name="Premium Basmati Rice - Export Quality"
                quantity="50kg Bag"
                price="4,500"
                unit="bag"
                available={true}
            />


            <ProductCard
                image={material}
                category="Packaging Materials"
                name="Heavy Duty Corrugated Carton Boxes"
                quantity="5 Ply"
                price="45"
                unit="unit"
                available={true}
            />


            <ProductCard
                image={freshproduct}
                category="Fresh Produce"
                name="Organic Hybrid Tomatoes - Grade A"
                price="32"
                unit="kg"
                available={false}
                hidden={true}
            />


            <ProductCard
                image={edibleoils}
                category="Edible Oils"
                name="Cold Pressed Groundnut Oil"
                quantity="15L Tin"
                price="2,850"
                unit="tin"
                available={true}
            />

        </div>
    );
}

export default MyStore;