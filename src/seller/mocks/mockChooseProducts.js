import categoryheader from "../../assets/categoryheader.png";
import basmathirice from "../../assets/basmathirice.png";
import wheat from "../../assets/wheat.png";
import corn from "../../assets/corn.png";
import rawcotton from "../../assets/rawcotton.png";
import coffee from "../../assets/coffee.png";
import tealeaves from "../../assets/tealeaves.png";

import vehicle from "../../assets/vehicle.jpg";
import machinery from "../../assets/machinery.png";
import electronics from "../../assets/electronics.png";
import material from "../../assets/material.jpg";
import generalmachinery from "../../assets/generalmachinery.jpg";

const makeProducts = (names, image) =>
    names.map((name, index) => ({
        id: index + 1,
        name,
        image
    }));

export const mockChooseProducts = {
    1: {
        name: "Agriculture",
        banner: categoryheader,
        products: [
            { id: 1, name: "Basmati Rice", image: basmathirice },
            { id: 2, name: "Wheat", image: wheat },
            { id: 3, name: "Corn / Maize", image: corn },
            { id: 4, name: "Raw Cotton", image: rawcotton },
            { id: 5, name: "Coffee Beans", image: coffee },
            { id: 6, name: "Tea Leaves", image: tealeaves }
        ]
    },

    2: {
        name: "Vehicles",
        banner: vehicle,
        products: makeProducts([
            "Truck",
            "Tractor",
            "Pickup Vehicle",
            "Commercial Vehicle",
            "Pickup truck",
            "JCB"
        ], vehicle)
    },

    3: {
        name: "Machinery",
        banner: machinery,
        products: makeProducts([
            "Excavator",
            "Forklift",
            "Concrete Mixer",
            "Industrial Generator",
            "Air Compressor",
            "Water Pump"
        ], machinery)
    },

    4: {
        name: "Electronics",
        banner: electronics,
        products: makeProducts([
            "Laptop",
            "Desktop Computer",
            "LED Television",
            "Mobile Phone",
            "CCTV Camera",
            "Printer"
        ], electronics)
    },

    5: {
        name: "Raw Materials",
        banner: material,
        products: makeProducts([
            "Steel",
            "Aluminium",
            "Copper",
            "Cement",
            "Timber",
            "Plastic Granules"
        ], material)
    },

    6: {
        name: "Other Categories",
        banner: generalmachinery,
        products: makeProducts([
            "Industrial Tools",
            "Safety Equipment",
            "Packaging Supplies",
            "Office Supplies",
            "Storage Equipment",
            "General Machinery"
        ], generalmachinery)
    }
};