const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');


const stripe = new Stripe('sk_test_51ReBEl03QOkfrCdupQq6vGWW0NhvXMDHEoUn7o465Md8TWGBcj0SDhHO1hpPBRfm1XgjJBRmoBDF14Ajbc6fx0lz00EUZxTE4O');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { plan } = req.body;
  console.log('Plan recibido:', plan);

  // Define precios según el plan
  let amount = 0;
  let productName = '';
  if (plan === 'básico') {
    amount = 2900; // €29.00
    productName = 'Plan Básico';
  } else if (plan === 'profesional') {
    amount = 5900; // €59.00
    productName = 'Plan Profesional';
  } else {
    return res.status(400).json({ error: 'Plan no válido para Stripe' });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: { name: productName },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
