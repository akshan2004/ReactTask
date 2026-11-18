import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList.jsx";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const visibleProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <main className="page">
      <section className="product-card" aria-labelledby="page-title">
        <p className="eyebrow">PRODUCT CATALOG</p>
        <h1 id="page-title">Product list</h1>
        <p className="intro">Search products and compare prices.</p>

        <div className="toolbar">
          <label className="search-box">
            <span className="sr-only">Search products by name</span>
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <div className="sort-controls" aria-label="Sort products by price">
            <button
              className={`sort-button ${sortOrder === null ? "active" : ""}`}
              onClick={() => setSortOrder(null)}
              aria-pressed={sortOrder === null}
            >
              Default order
            </button>
            <button
              className={`sort-button ${sortOrder === "asc" ? "active" : ""}`}
              onClick={() => setSortOrder("asc")}
              aria-pressed={sortOrder === "asc"}
            >
              Price: low to high
            </button>
            <button
              className={`sort-button ${sortOrder === "desc" ? "active" : ""}`}
              onClick={() => setSortOrder("desc")}
              aria-pressed={sortOrder === "desc"}
            >
              Price: high to low
            </button>
          </div>
        </div>

        <p className="result-count" aria-live="polite">
          {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
        </p>
        <ProductList products={visibleProducts} />
      </section>
    </main>
  );
}
