const ProductController = require('../controllers/product.controller');

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.put('/api/products/:id', ProductController.updateOneProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}

