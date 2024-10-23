API Request Examples
1. Update Stock:

URL: http://localhost:3000/api/stock
Body:
        `{
        "code": "A123",
        "size": "M",
        "quantity": 50,
        "price": 500
        }`

Response:
`{
  "message": "Stock update successful"
}`


2. Bulk Update Stock:

URL: http://localhost:3000/api/stock/bulk
Body:
`        [
        { "code": "A123", "size": "M", "quantity": 50, "price": 500 },
        { "code": "A124", "size": "L", "quantity": 30, "price": 600 }
        ]`
Response:
`{
  "message": "Bulk update successful"
}`

3. Check Order Fulfillment:

URL: http://localhost:3000/api/order/fulfillment
Body:
`{
  "items": [
    { "code": "A123", "size": "M", "quantity": 5 },
    { "code": "A124", "size": "L", "quantity": 2 }
  ]
}`
Response (if the order can be fulfilled) :
`{
  "canFulfill": true
}`
Response (if the order cannot be fulfilled):
`{
  "canFulfill": false
}`


4. Calculate Order Cost:

URL: http://localhost:3000/api/order/cost
Body:
`{
  "items": [
    { "code": "A123", "size": "M", "quantity": 5 },
    { "code": "A124", "size": "L", "quantity": 2 }
  ]
}`

Response (if order can be fulfilled):
`{
  "canFulfill": true,
  "totalCost": 3700
}`
Response (if order cannot be fulfilled):
`{
  "canFulfill": false,
  "totalCost": 0
}`