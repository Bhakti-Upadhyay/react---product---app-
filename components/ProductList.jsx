import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>
            <h4>{p.title}</h4>
          </Link>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;