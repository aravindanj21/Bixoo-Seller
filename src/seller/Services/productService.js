import { mockProducts } from "../mocks/mockProduct";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const USE_MOCK_API =
    import.meta.env.VITE_USE_MOCK_API === "true";

const MOCK_STORAGE_KEY = "mystore-created-products";



export const getProducts = async () => {

    if (USE_MOCK_API) {

        
        const existingProducts = structuredClone(mockProducts);

        
        const storedProducts = JSON.parse(
            localStorage.getItem(MOCK_STORAGE_KEY) || "[]"
        );

        
        return [
            ...existingProducts,
            ...storedProducts
        ];
    }

    const response = await fetch(
        `${API_BASE_URL}/products`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
};



export const createProduct = async (productData) => {

    if (USE_MOCK_API) {

        const storedProducts = JSON.parse(
            localStorage.getItem(MOCK_STORAGE_KEY) || "[]"
        );

        const newProduct = {
            ...productData,

            id: crypto.randomUUID(),

            image:
                productData.selectedImage ||
                productData.photos?.[0] ||
                "",

            available: true,
            hidden: false,
            status: "Live"
        };

        localStorage.setItem(
            MOCK_STORAGE_KEY,
            JSON.stringify([
                ...storedProducts,
                newProduct
            ])
        );

        console.log("New product saved:", newProduct);

        return newProduct;
    }

    const response = await fetch(
        `${API_BASE_URL}/products`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create product");
    }

    return response.json();
};