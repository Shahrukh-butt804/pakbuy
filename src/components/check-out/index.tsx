"use client";

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import type { StripeCardElement } from '@stripe/stripe-js';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

// Load Stripe once
const stripePromise = loadStripe('pk_test_51QwMvhJMgPmQ9gVNbdIJVohtSFZ3cFGmU3JRAeMOGSi5UA4pNgna6xBxohqh96RTkQDjZXXEmmXJVyyxz8xk71gn00Is6RXKBJ');

function CheckoutForm({ handleSubmitForm }: any) {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const userDetails = useSelector((state: any) => state.user.userDetails);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement) as StripeCardElement | null;

        if (!cardElement) {
            console.error("Card Element not found");
            return;
        }

        setLoading(true);

        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            console.error(error.message);
            setLoading(false);
        } else if (token) {
            const res = await handleSubmitForm(token.id);
            if (res) {
                if (userDetails) {
                    navigate("/order-history");
                } else {
                    navigate("/");
                }
            }
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#32325d',
                            '::placeholder': { color: '#a0aec0' },
                        },
                        invalid: { color: '#fa755a' },
                    },
                }}
            />
            <div className="text-center">
                <Button onClick={(e: any) => handleSubmit(e)}
                    disabled={!stripe || loading} type="primary" htmlType="submit" className="mainbtn private-label-button">
                    {loading ? "Processing..." : "Submit"}
                </Button>
            </div>
        </div>
    );
}


export default function PaymentPage({ handleSubmit }: any) {
    return (
        <div className="mx-auto p-6 ">
            <Elements stripe={stripePromise}>
                <CheckoutForm handleSubmitForm={handleSubmit} />
            </Elements>
        </div>
    );
}
