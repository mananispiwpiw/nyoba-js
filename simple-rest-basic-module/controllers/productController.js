import Product from '../models/productModel.js';

// @desc    Gets all products/items
// @route   GET /api/products
async function getProducts(req, res) {
    try {
        const products = await Product.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {
        console.log(error);
    }
}

// @desc    Gets single product/item
// @route   GET /api/product/id
async function getProduct(req, res) {
    try {
        const product = await Product.findByID();

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'Product not found.' }));
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(product));
            res.end();
        }
    } catch (error) {
        console.log(error);
    }
}

export { getProducts };
