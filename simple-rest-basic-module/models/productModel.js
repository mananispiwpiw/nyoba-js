import products from '../products.json' assert { type: 'json' };

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

//export { findAll };

const Product = { findAll };
export default Product;
