// const functions = require("firebase-functions");
// const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  process.env.REACT_APP_STRIPE_S_KEY
);

// This is your test secret API key.

const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.get("/",(req,res)=> res.send("our backend is running at port 4242"))

app.listen(4242, () => console.log('Running on port 4242'));





// const uuid = express("uuid");

// // config
// const app = express();

// // midleware
// app.use(express.json());
// // CORS == cross object references
// app.use(cors());

// // routes
// app.get("/", (req, res) => res.send("our website backend is up"));

// app.post("/payment/create", (req, res) => {
//   const { token } = req.body;
//   // console.log("Product", product);
//   // console.log("price", product.price);
//   const idempotencyKey = uuid();
//   // this above command is used to create a unique id when ever user request for payment, this unique id will stop us from charging the payment twice

//   return stripe.customers
//     .create({
//       email: token.email,
//       source: token.id,
//     })
//     .then((customer) => {
//       stripe.charges.create(
//         {
//           // amount: product.price * 100,
//           currency: "INR",
//           customer: customer.id,
//           receipt_email: token.email,
//           // discription: `your products ${product.name}`,
//           shipping: {
//             name: token.card.name,
//             address: {
//               country: token.card.address_country,
//             },
//           },
//         },
//         { idempotencyKey }
//       );
//     })
//     .then((result) => res.status(200).json(result))
//     .catch((err) => console.log(err.response.data));
// });

// exports.api = functions.https.onRequest(app);
// // app.listen(8484, () =>
// //   console.log("this website will be listening at port 8484")
// // );
