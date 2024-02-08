import { useEffect, useState } from "react";
import Header from "./Header";
import "../src/style/style.css";
import List from "./List";
import Footer from "./Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://barcelonacodeschool.com/files/reactB1products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <>
      <Header />
      <main className="main">
        <section className="products">
          <div className="container">
            <div className="products__general">
              <h1 className="products__header">All products</h1>
              <List products={products} />
            </div>

            <div className="products__bestsellers">
              <h1 className="products__header">Best Sellers</h1>
              <List products={bestSellers} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
