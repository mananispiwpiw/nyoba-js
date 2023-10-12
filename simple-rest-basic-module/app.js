const http = require('http');
const { getProducts, getProduct, createProduct } = require('./controllers/productController');

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
    } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Route not found!' }));
        res.end();
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
