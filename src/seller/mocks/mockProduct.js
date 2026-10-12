import grains from "../../assets/grains.jpg";
import material from "../../assets/material.jpg";
import freshproduct from "../../assets/freshproduct.jpg";
import edibleoils from "../../assets/edibleoils.jpg";

export const mockProducts = [
    {
        id: 1,
        category: "Grains & Cereals",
        productName: "Premium Basmati Rice - Export Quality",
        quantity: "50kg Bag",
        pricing: {
            minPrice: 4500
        },
        unit: "bag",
        photos: [grains],
        available: true,
        hidden: false
    },
    {
        id: 2,
        category: "Packaging Materials",
        productName: "Heavy Duty Corrugated Carton Boxes",
        quantity: "5 Ply",
        pricing: {
            minPrice: 45
        },
        unit: "unit",
        photos: [material],
        available: true,
        hidden: false
    },
    {
        id: 3,
        category: "Fresh Produce",
        productName: "Organic Hybrid Tomatoes - Grade A",
        quantity: "",
        pricing: {
            minPrice: 32
        },
        unit: "kg",
        photos: [freshproduct],
        available: false,
        hidden: true
    },
    {
        id: 4,
        category: "Edible Oils",
        productName: "Cold Pressed Groundnut Oil",
        quantity: "15L Tin",
        pricing: {
            minPrice: 2850
        },
        unit: "tin",
        photos: [edibleoils],
        available: true,
        hidden: false
    }
];