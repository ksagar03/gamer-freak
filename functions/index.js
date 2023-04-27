const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Lx20gSHgvSf9YWJE38GQ3cVmP0AGMzoN5DDV9HKWkmXTdNUZg3sYGc2awYKggWJ70cjpKYmXMJjjvBXn9r4nj1Z009XYH8Yiw"
);

const uuid = express("uuid");

// config
const app = express();

// midleware
app.use(express.json());
// CORS == cross object references
app.use(cors());

// routes
app.get("/", (req, res) => res.send("our website backend is up"));

app.post("/payment/create", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("price", product.price);
  const idempotencyKey = uuid();
  // this above command is used to create a unique id when ever user request for payment, this unique id will stop us from charging the payment twice

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "INR",
          customer: customer.id,
          receipt_email: token.email,
          discription: `your products ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err)); 
});

app.listen(8484, () =>
  console.log("this website will be listening at port 8484")
);
