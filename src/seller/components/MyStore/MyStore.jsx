import { useEffect, useState } from "react";

import "./MyStoreCommon.css";
import "./MyStore.css";

import AddProduct from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";

import { getProducts } from "../../Services/productService";

function MyStore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let active = true;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getProducts();

                if (active) {
                    setProducts(
                        Array.isArray(data)
                            ? data
                            : data?.products || []
                    );
                }
            } catch (err) {
                console.error("Error fetching products:", err);

                if (active) {
                    setError("Unable to load products.");
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        fetchProducts();

        return () => {
            active = false;
        };
    }, []);

    return (
        <div className="my-store">
            <div className="my-store-header">
                <h2>My Store</h2>
                <p>
                    Manage your active inventory and listings.
                </p>
            </div>

            <AddProduct />

            {loading && (
                <p>Loading products...</p>
            )}

            {error && (
                <p className="error-message" role="alert">
                    {error}
                </p>
            )}

            {!loading && !error && products.length === 0 && (
                <p>No products available.</p>
            )}

            {!loading && !error && products.map((product, index) => {
                const firstPhoto = product.photos?.[0];

                const productImage =
                    product.image ||
                    product.selectedImage ||
                    (typeof firstPhoto === "string"
                        ? firstPhoto
                        : firstPhoto?.preview) ||
                    "";

                const productName =
                    product.productName ||
                    product.name ||
                    "";

                const productPrice =
                    product.pricing?.minPrice ??
                    product.price ??
                    0;

                const productUnit =
                    product.pricing?.priceUnit ||
                    product.unit ||
                    "";

                const productQuantity =
                    product.quantity ?? "";

                return (
                    <ProductCard
                        key={product.id ?? index}
                        image={productImage}
                        category={product.category || ""}
                        name={productName}
                        quantity={productQuantity}
                        price={productPrice}
                        unit={productUnit}
                        available={product.available ?? true}
                        hidden={product.hidden ?? false}
                    />
                );
            })}
        </div>
    );
}

export default MyStore;