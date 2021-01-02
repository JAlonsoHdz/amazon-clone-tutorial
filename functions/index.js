const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51I4hGeEqF7Pjq8Xb6CQjWMvfKrIZqU5c07jhLLlyGckqc2hGFwfIUXbt1RfmkncJCe8SB6eOUmc4tH8LIonkrc1j008XJy3537"
);

// API

// App config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received! >> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-953d9/us-central1/api
