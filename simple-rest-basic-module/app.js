import http from 'node:http';
import {
    getProducts,
    getProduct,
} from '../simple-rest-basic-module/controllers/productController.js';

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    } else if (req.url.match(/\/api\/product\/id\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getProducts(req, res, id);
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Route not found' }));
        res.end();
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
