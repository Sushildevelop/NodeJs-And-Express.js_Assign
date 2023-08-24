const http = require('http');

const PORT = 3030;
const hostname = 'localhost'
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200,
            res.setHeader('Content-Type', 'text/plain'),
            res.end('Welcome to men & Women Dummy Data')

        // Request product for men
    } else if (req.url === '/men') {
        res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json'),
            res.end(JSON.stringify([{
                    'id': "1",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "2",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "3",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "4",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "5",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "6",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "7",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "8",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "9",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "10",
                    "name": "Men's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }

            ]))
    }

    // End request for product men

    // Request for women product
    else if (req.url === '/women') {
        res.statusCode = 200,
            res.setHeader('Content-Type', "application/json"),
            res.end(JSON.stringify([{
                    'id': "1",
                    "name": "Women's T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "2",
                    "name": "Women's Jeans",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "3",
                    "name": "Women's Trouser",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "4",
                    "name": "Women's Saree",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "5",
                    "name": "Women T-shirt",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "6",
                    "name": "Women's Saree",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "7",
                    "name": "Women's suit",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "8",
                    "name": "Women's Lipstick",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "9",
                    "name": "Women's necklace",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }, {
                    'id': "10",
                    "name": "Women's ring",
                    "brand": "ABC",
                    "price": 399,
                    "discountedPrice": 476,
                    "size": "M",
                    "category": "Clothing"
                }


            ]))
    } else {
        res.statusCode = 400,
            res.setHeader('Content-Type', "text/plain"),
            res.end('Page not found');
    }
})

server.listen(PORT);
console.log(`listening on port ${hostname}:${PORT}`);