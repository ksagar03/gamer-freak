const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_S_KEY);

// config
const app = express();

app.use(express.json());
app.use(cors()); //CORS == cross object references
app.get("/", (req, res) => res.send("hello it is working"));
app.post('/create-checkout-session', async (req, res) => {
    // const line_items = (req) => 
    console.log(req.data)
});
    // const session = await stripe.checkout.sessions.create({
    //   line_items: [
    //     {
    //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    //       price: '',
    //     },
    //   ],
    //   mode: 'payment',
    //   success_url: "http://127.0.0.1:5001/gamer-freak/us-central1/api/order ",
    //   cancel_url: `http://127.0.0.1:5001/gamer-freak/us-central1/api/order`,
    // });


// app.listen(4001, ()=> console.log("listening at port 4001"))

exports.api = functions.https.onRequest(app);
