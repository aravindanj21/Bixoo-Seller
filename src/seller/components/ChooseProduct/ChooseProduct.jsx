import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ChooseProduct.css";

import categoryheader from "../../../assets/categoryheader.png";

import basmathirice from "../../../assets/basmathirice.png";
import wheat from "../../../assets/wheat.png";
import corn from "../../../assets/corn.png";
import rawcotton from "../../../assets/rawcotton.png";
import coffee from "../../../assets/coffee.png";
import tealeaves from "../../../assets/tealeaves.png";

import searchIcon from "../../../assets/search.png";

import vehicle from "../../../assets/vehicle.jpg";
import machinery from "../../../assets/machinery.png"
import electronics from "../../../assets/electronics.png"
import material from "../../../assets/material.jpg"
import generalmachinery from "../../../assets/generalmachinery.jpg"



function ChooseProduct() {

    const navigate = useNavigate();
    const { categoryId } = useParams();

    const [searchTerm, setSearchTerm] = useState("");


    

    const categoryData = {

        1: {
            name: "Agriculture",
            banner: categoryheader,

            products: [
                {
                    id: 1,
                    name: "Basmati Rice",
                    image: basmathirice,
                },
                {
                    id: 2,
                    name: "Wheat",
                    image: wheat,
                },
                {
                    id: 3,
                    name: "Corn / Maize",
                    image: corn,
                },
                {
                    id: 4,
                    name: "Raw Cotton",
                    image: rawcotton,
                },
                {
                    id: 5,
                    name: "Coffee Beans",
                    image: coffee,
                },
                {
                    id: 6,
                    name: "Tea Leaves",
                    image: tealeaves,
                },
            ],
        },


        2: {
    name: "Vehicles",
    banner: vehicle,

    products: [
        {
            id: 1,
            name: "Truck",
            image: vehicle,
        },
        {
            id: 2,
            name: "Tractor",
            image: vehicle,
        },
        {
            id: 3,
            name: "Pickup Vehicle",
            image: vehicle,
        },
        {
            id: 4,
            name: "Commercial Vehicle",
            image: vehicle,
        },
        {
            id: 5,
            name: "Pickup truck",
            image: vehicle,
        },
        {
            id: 6,
            name: "JCB",
            image: vehicle,
        },
    ],
},


        3: {
            name: "Machinery",
            banner: machinery,

            products: [

                {
            id: 1,
            name: "Excavator",
            image: machinery,
        },
        {
            id: 2,
            name: "Forklift",
            image: machinery,
        },
        {
            id: 3,
            name: "Concrete Mixer",
            image: machinery,
        },
        {
            id: 4,
            name: "Industrial Generator",
            image: machinery,
        },
        {
            id: 5,
            name: "Air Compressor",
            image: machinery,
        },
        {
            id: 6,
            name: "Water Pump",
            image: machinery,
        },
                
            ],
        },


        4: {
            name: "Electronics",
            banner: electronics,

            products: [
                {
                    id: 1,
                    name: "Laptop",
                    image: electronics,
                },
                {
                    id: 2,
                    name: "Desktop Computer",
                    image: electronics,
                },
                {
                    id: 3,
                    name: "LED Television",
                    image: electronics,
                },
                {
                    id: 4,
                    name: "Mobile Phone",
                    image: electronics,
                },
                {
                    id: 5,
                    name: "CCTV Camera",
                    image: electronics,
                },
                {
                    id: 6,
                    name: "Printer",
                    image: electronics,
                },
                
            ],
        },


        5: {
            name: "Raw Materials",
            banner: material,

            products: [
                {
                    id: 1,
                    name: "Steel",
                    image: material,
                },
                {
                    id: 2,
                    name: "Aluminium",
                    image: material,
                },
                {
                    id: 3,
                    name: "Copper",
                    image: material,
                },
                {
                    id: 4,
                    name: "Cement",
                    image: material,
                },
                {
                    id: 5,
                    name: "Timber",
                    image: material,
                },
                {
                    id: 6,
                    name: "Plastic Granules",
                    image: material,
                },
                
            ],
        },


        6: {
            name: "Other Categories",
            banner: generalmachinery,

            products: [
                {
                    id: 1,
                    name: "Industrial Tools",
                    image: generalmachinery,
                },
                {
                    id: 2,
                    name: "Safety Equipment",
                    image: generalmachinery,
                },
                {
                    id: 3,
                    name: "Packaging Supplies",
                    image: generalmachinery,
                },
                {
                    id: 4,
                    name: "Office Supplies",
                    image: generalmachinery,
                },
                {
                    id: 5,
                    name: "Storage Equipment",
                    image: generalmachinery,
                },
                {
                    id: 6,
                    name: "General Machinery",
                    image: generalmachinery,
                },
                
            ],
        },

    };



    const selectedCategory = categoryData[categoryId];

    const products = selectedCategory?.products || [];


    

    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );


    
   const handleProductClick = (product) => {

    const selectedData = {
        categoryId: categoryId,
        categoryName: selectedCategory?.name,

        productId: product.id,
        productName: product.name,
        productImage: product.image,
    };

    console.log("Selected Product Data:", selectedData);

    navigate("/add-custom-product", {
        state: selectedData
    });
};


    

    const handleAddCustom = () => {

    navigate("/add-custom-product", {
        state: {
            categoryId: categoryId,
            categoryName: selectedCategory?.name,
            productId: null,
            productName: "",
            productImage: null,
            isCustomProduct: true
        }
    });

};


    return (

        <div className="choose-product-page">


            

            <section className="choose-product-header">
                 <button
                className="close-button"
                onClick={() => navigate("/seller/my-store")}
            >
                ×
            </button>


                <div className="choose-progress-section">

    <div className="choose-progress-text">
        <span>Step 2 of 5</span>
        <span>Choose Product</span>
    </div>

    <div className="choose-progress-bars">
        <span className="choose-progress-bar active"></span>
        <span className="choose-progress-bar active"></span>
        <span className="choose-progress-bar"></span>
        <span className="choose-progress-bar"></span>
        <span className="choose-progress-bar"></span>
    </div>

</div>


                <h1>
                    Choose Product
                </h1>


                <div className="choose-progress">

                    <div className="choose-progress-fill"></div>

                </div>


               

                <div className="choose-description-container">

                    <p>
                        Select the specific item you want to sell within the{" "}
                        {selectedCategory?.name} category.
                    </p>

                </div>


               
                <div className="product-search-container">

                    <div className="product-search">

                        <img
                            src={searchIcon}
                            alt="Search"
                            className="product-search-icon"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />

                    </div>

                </div>


            </section>


           

            {selectedCategory?.banner && (
    <div
        className="agriculture-banner"
        style={{
            backgroundImage: `url(${selectedCategory.banner})`,
        }}
    >
        <div className="banner-overlay">
            <h2 className="banner-category-name">
                {selectedCategory.name}
            </h2>
        </div>
    </div>
)}


            

            <section className="product-feed">


                <div className="product-grid">


                    {filteredProducts.map((product) => (

    <button
        type="button"
        className="product-story-card"
        key={product.id}
        onClick={() => handleProductClick(product)}
    >

        <img
            src={product.image}
            alt={product.name}
        />

        <div className="product-card-name">
            {product.name}
        </div>

    </button>

))}


                </div>




                {filteredProducts.length === 0 && (

                    <p className="no-products">
                        No products available in{" "}
                        {selectedCategory?.name}.
                    </p>

                )}


                

                <button
                    type="button"
                    className="add-custom-product"
                    onClick={handleAddCustom}
                >

                    <span className="custom-plus">
                        +
                    </span>

                    <span>
                        Can't find your product? Add Custom
                    </span>

                </button>


            </section>


        </div>

    );
}


export default ChooseProduct;