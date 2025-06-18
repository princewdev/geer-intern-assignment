import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Product Listing</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className={styles.card}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
