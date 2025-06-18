let products = [
  { id: '1', name: 'Laptop', price: 999.99, imageUrl: 'https://placehold.co/300x200/png' },
  { id: '2', name: 'Smartphone', price: 599.99, imageUrl: 'https://placehold.co/300x200/png' },
  { id: '3', name: 'Headphones', price: 199.99, imageUrl: 'https://placehold.co/300x200/png' }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { name, price, imageUrl } = req.body;
    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      imageUrl
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
