import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          const found = data.find(p => p.id === id);
          setProduct(found);
        });
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxWidth: '400px' }} />
      <p style={{ fontSize: '1.2rem' }}>${product.price.toFixed(2)}</p>
    </div>
  );
}
