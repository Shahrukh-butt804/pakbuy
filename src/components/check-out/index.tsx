import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { StripeCardElement } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetStripeKeyQuery } from "../../redux/services/orderSlice";

function CheckoutForm({ handleSubmitForm, showSubmitBtn = true }: any) {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [showAIConsent, setShowAIConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(
      CardElement,
    ) as StripeCardElement | null;

    if (!cardElement) {
      console.error("Card Element not found");
      return;
    }

    // ALWAYS open consent first
    setShowAIConsent(true);
  };

  const processPayment = async (cardElement: StripeCardElement) => {
    setLoading(true);

    try {
      const { token, error } = await stripe!.createToken(cardElement);

      if (error) {
        console.error(error.message);
        return;
      }

      if (!token) {
        console.error("Unable to create payment token");
        return;
      }

      const res = await handleSubmitForm(token.id);
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptAIConsent = async () => {
    setShowAIConsent(false);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(
      CardElement,
    ) as StripeCardElement | null;

    if (!cardElement) {
      console.error("Card Element not found");
      return;
    }

    await processPayment(cardElement);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#C97873",
                "::placeholder": { color: "#a0aec0" },
              },
              invalid: { color: "#fa755a" },
            },
          }}
        />
        {showSubmitBtn && (
          <div className="text-center">
            <Button
              onClick={(e: any) => handleSubmit(e)}
              disabled={!stripe || loading}
              htmlType="submit"
              className=" !w-full !h-11 !mt-5 !rounded-xl !border-none !bg-[#d17f89] !text-white !font-semibold !text-sm !tracking-wide !shadow-lg !shadow-[#d17f89]/20 hover:!bg-[#c26f7b] hover:!shadow-[#d17f89]/30 hover:!scale-[1.01] active:!scale-[0.99] disabled:!opacity-50 disabled:!cursor-not-allowed transition-all duration-200
  "
            >
              {loading ? "Processing..." : "SUBMIT"}
            </Button>
          </div>
        )}
        <Modal
          open={showAIConsent}
          centered
          width={500}
          onCancel={() => setShowAIConsent(false)}
          footer={null}
          closable={false}
          styles={{
            content: {
              padding: 0,
              overflow: "hidden",
              borderRadius: "18px",
              background: "#111111",
            },
            mask: {
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(4px)",
            },
          }}
        >
          <div className="bg-[#111111] text-white">
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-white/10">
              <button
                type="button"
                onClick={() => setShowAIConsent(false)}
                className="
          absolute right-4 top-4
          w-7 h-7
          rounded-lg
          flex items-center justify-center
          text-white/50
          hover:text-[#d17f89]
          hover:bg-white/5
          transition-all
        "
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div
                  className="
            w-10 h-10
            rounded-lg
            flex items-center justify-center
            bg-[#d17f89]/10
            border border-[#d17f89]/20
            text-[#d17f89]
            text-lg
          "
                >
                  ✦
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    AI Shopping Assistant
                  </h2>

                  <p className="text-xs text-white/45 mt-0.5">
                    Payment authorization required
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-4 space-y-3">
              {/* Main explanation */}
              <p className="text-[13px] leading-5 text-white/70">
                This application includes an{" "}
                <span className="text-[#d17f89] font-semibold">
                  AI-powered shopping assistant
                </span>{" "}
                that can manage your cart and place orders when you ask it to.
              </p>

              {/* Payment information */}
              <div
                className="
          rounded-lg
          border border-white/10
          bg-white/[0.03]
          px-3.5 py-3
        "
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#d17f89]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-[13px] font-semibold text-white">
                      Save your payment method
                    </h3>

                    <p className="text-xs text-white/50 leading-5 mt-0.5">
                      Your payment method may be securely saved with our payment
                      provider so the AI assistant can place future orders for
                      you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important + changing card */}
              <div
                className="
          rounded-lg
          border border-[#d17f89]/20
          bg-[#d17f89]/5
          px-3.5 py-3
        "
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#d17f89] text-sm mt-0.5">⚡</div>

                  <div>
                    <h3 className="text-[13px] font-semibold text-[#d17f89]">
                      Important
                    </h3>

                    <p className="text-xs text-white/55 leading-5 mt-0.5">
                      The AI assistant will use your{" "}
                      <span className="text-white font-medium">
                        most recently used payment method
                      </span>{" "}
                      when placing orders.
                    </p>

                    <p className="text-xs text-white/40 leading-5 mt-1">
                      To change your card, simply place your next order manually
                      using your new card. It will then become the payment
                      method used for future AI-assisted orders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stripe security */}
              <div
                className="
          flex items-center gap-2.5
          px-3.5 py-2.5
          rounded-lg
          bg-white/[0.025]
          border border-white/5
        "
              >
                <div className="text-green-400 shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                </div>

                <p className="text-[11px] text-white/40 leading-4">
                  Your card details are handled securely by Stripe. We do not
                  store your raw card number or CVV on our servers.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
        px-5 py-3.5
        border-t border-white/10
        flex items-center justify-end gap-2.5
        bg-black/20
      "
            >
              <button
                type="button"
                onClick={() => setShowAIConsent(false)}
                className="
          px-4 py-2
          rounded-lg
          border border-white/10
          text-xs font-medium
          text-white/55
          hover:text-white
          hover:bg-white/5
          transition-all
        "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAcceptAIConsent}
                className="
          px-5 py-2
          rounded-lg
          bg-[#d17f89]
          text-white
          text-xs font-semibold
          shadow-lg shadow-[#d17f89]/10
          hover:bg-[#c26a75]
          hover:shadow-[#d17f89]/20
          transition-all
        "
              >
                Agree & Continue
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </form>
  );
}

export default function PaymentPage({
  handleSubmit,
  showSubmitBtn = true,
}: any) {
  const { data: publishableKey, isLoading } = useGetStripeKeyQuery({});

  // Load Stripe once
  let stripePromise = null;

  if (publishableKey) {
    stripePromise = loadStripe(publishableKey);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto p-6">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          handleSubmitForm={handleSubmit}
          showSubmitBtn={showSubmitBtn}
        />
      </Elements>
    </div>
  );
}
