export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    products = products.filter(p => p.id !== id);
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
