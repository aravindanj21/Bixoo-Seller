import { mockCategories } from "../mocks/mockCategories";
import { mockChooseProducts } from "../mocks/mockChooseProducts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const USE_MOCK_API =
    import.meta.env.VITE_USE_MOCK_API === "true";


export const getCategories = async () => {

    if (USE_MOCK_API) {
        return mockCategories.map(category => ({
            ...category
        }));
    }

    const response = await fetch(
        `${API_BASE_URL}/categories`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
};


export const getChooseProducts = async (categoryId) => {

    if (USE_MOCK_API) {
        const category = mockChooseProducts[categoryId];

        if (!category) {
            throw new Error("Category not found");
        }

        return {
            ...category,
            products: category.products.map(product => ({
                ...product
            }))
        };
    }

    const response = await fetch(
        `${API_BASE_URL}/categories/${encodeURIComponent(categoryId)}/products`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch category products");
    }

    return response.json();
};

export const getSuggestedImages = async (categoryId) => {

    if (USE_MOCK_API) {
        const category = mockChooseProducts[categoryId];

        return category?.products
            ?.slice(0, 3)
            .map((product) => product.image) || [];
    }

    const response = await fetch(
        `${API_BASE_URL}/categories/${encodeURIComponent(categoryId)}/suggested-images`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch suggested images");
    }

    return response.json();
};