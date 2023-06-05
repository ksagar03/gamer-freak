const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
// const stripe = require("stripe")(process.env.REACT_APP_STRIPE_S_KEY);
const stripe = require("stripe")(
  "sk_test_51Lx20gSHgvSf9YWJE38GQ3cVmP0AGMzoN5DDV9HKWkmXTdNUZg3sYGc2awYKggWJ70cjpKYmXMJjjvBXn9r4nj1Z009XYH8Yiw"
);
// config
const app = express();

app.use(express.json());
app.use(cors()); //CORS == cross object references
app.get("/", (req, res) => res.send("hello it is working"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(paymentIntent);
  res.status(201).send({
    ClientSecret: paymentIntent.client_secret,
  });
});
// app.listen(4001, ()=> console.log("listening at port 4001"))

exports.api = functions.https.onRequest(app);

// console.log(req.data);
// const session = await stripe.checkout.sessions.create({
//   line_items: [
//     {
//       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//       price: "price_1N6xNhSHgvSf9YWJhOH2RxQH",
//     },

//   ],
//   mode: "payment",
//   success_url: "http://127.0.0.1:5001/gamer-freak/us-central1/api/order ",
//   cancel_url: `http://127.0.0.1:5001/gamer-freak/us-central1/api/order`,
// });
// res.redirect(303, session.url);
