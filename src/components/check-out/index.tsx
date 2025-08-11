import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import type { StripeCardElement } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetStripeKeyQuery } from '../../redux/services/orderSlice';



function CheckoutForm({ handleSubmitForm ,  showSubmitBtn = true }: any) {

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

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
            
            console.log("🚀 ~ handleSubmit ~ token:", token)
        } else if (token) {
            const res = await handleSubmitForm(token.id);
            if (res) {
                navigate("/");
               
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
                            color: '#cb9f9a',
                            '::placeholder': { color: '#a0aec0' },
                        },
                        invalid: { color: '#fa755a' },
                    },
                }}
            />
            {showSubmitBtn &&<div className="text-center">
                <Button onClick={(e: any) => handleSubmit(e)}
                    disabled={!stripe || loading}  htmlType="submit" className="mainbtn private-label-button site-btn w-full mt-5">
                    {loading ? "Processing..." : "REGISTER"}
                </Button>
            </div>}
        </div>
    );
}


export default function PaymentPage({ handleSubmit, 
    showSubmitBtn = true
 }: any) {
    const { data: publishableKey, isLoading } = useGetStripeKeyQuery({});
    
    // Load Stripe once
    let stripePromise = null

    if (publishableKey) {
        stripePromise = loadStripe(publishableKey);
    }


    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className="mx-auto p-6 ">
            <Elements stripe={stripePromise}>
                <CheckoutForm handleSubmitForm={handleSubmit} showSubmitBtn={showSubmitBtn} />
            </Elements>
        </div>
    );
}
