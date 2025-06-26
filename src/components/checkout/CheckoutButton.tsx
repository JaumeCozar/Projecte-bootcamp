import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('pk_test_51ReBEl03QOkfrCdu1lZBhIMDN6Nb8qVv773XnIdLTMMEJjFibZ5hFKpYSJanNjqIHyi5Zchx2q1lWCMLKLIjs0lR007ZvCBvsG'); // Reemplaza por tu clave pública real

export function CheckoutButton({ plan }: { plan: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });

      if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
      }

      const data = await res.json();
      if (!data.id) {
        throw new Error('La respuesta no contiene un sessionId válido');
      }

      const stripe = await stripePromise;
      const { error } = await stripe?.redirectToCheckout({ sessionId: data.id }) || {};
      if (error) {
        throw new Error(error.message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error desconocido');
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Redirigiendo...' : 'Pagar con Stripe'}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </div>
  );
} 