import { MessageCircle, Minus, Send, ShoppingBag, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../constants/api";


const INITIAL_MESSAGES = [
  {
    id: 1,
    role: "bot",
    text: "Hey! I'm your shopping assistant. Ask me about products, collections, or order status.",
  },
];

const QUICK_REPLIES = [
  "Show new arrivals",
  "Best sellers this week",
  "Track my order",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef:any = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const pushMessage = (msg:any) =>
    setMessages((prev) => [...prev, { id: prev.length + 1, ...msg }]);

  const handleSend = async (text:any) => {
    const value = (text ?? input).trim();
    if (!value) return;

    pushMessage({ role: "user", text: value });
    setInput("");
    setTyping(true);

    // Last few turns as OpenRouter-style { role, content } history
    const history = messages
      .filter((m) => m.role === "user" || m.role === "bot")
      .slice(-6)
      .map((m) => ({ role: m.role === "bot" ? "assistant" : "user", content: m.text }));

    try {
      const res = await fetch(`${BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, history }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Request failed");

      pushMessage({ role: "bot", text: data.reply });
    } catch (err) {
      pushMessage({
        role: "bot",
        text: "Sorry, I couldn't reach the assistant just now — please try again in a moment.",
      });
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
      {/* ---------------- Expanded chat panel ---------------- */}
      {open && (
        <div
          className="mb-4 flex h-[520px] w-[360px] max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style={{
            background: "#0F1115",
            animation: "chatw-pop 220ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3.5"
            style={{
              background: "linear-gradient(135deg,#C97873 0%,#D98F7E 55%,#E4A98F 100%)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <ShoppingBag className="h-4.5 w-4.5 text-white" size={18} />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#6B45F5] bg-[#3DDC84]" />
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <span className="text-[13.5px] font-semibold leading-tight text-white">
                  Shop Assistant
                </span>
                <span className="text-[11px] leading-tight text-white/70">
                  Online · replies in seconds
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-white/80 transition hover:bg-white/15 hover:text-white"
              aria-label="Minimize chat"
            >
              <Minus size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4"
            style={{ background: "#0F1115" }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "bot" && (
                  <div className="mr-2 mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#C97873]/20">
                    <Sparkles size={12} className="text-[#E4A99E]" />
                  </div>
                )}
                <div
                  className={`max-w-[76%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md text-white"
                      : "rounded-bl-md text-[#E7E7EA]"
                  }`}
                  style={
                    m.role === "user"
                      ? { background: "linear-gradient(135deg,#C97873,#D98F7E)" }
                      : { background: "#1B1E26", border: "1px solid #262A34" }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="mr-2 mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#C97873]/20">
                  <Sparkles size={12} className="text-[#E4A99E]" />
                </div>
                <div
                  className="flex items-center gap-1 rounded-2xl rounded-bl-md px-4 py-3"
                  style={{ background: "#1B1E26", border: "1px solid #262A34" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#C97873]"
                      style={{
                        animation: `chatw-bounce 1.1s ${i * 0.15}s infinite ease-in-out`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick replies — shown until the user sends their first message */}
            {messages.length === 1 && !typing && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="rounded-full px-3 py-1.5 text-[12px] font-medium text-[#E8B9AE] transition hover:text-white"
                    style={{ background: "#1B1E26", border: "1px solid #4A2E2A" }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-3"
            style={{ background: "#14161C", borderTop: "1px solid #22252D" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask about a product or collection…"
              className="flex-1 rounded-xl bg-[#1B1E26] px-3.5 py-2.5 text-[13px] text-white placeholder-[#6B7280] outline-none ring-1 ring-[#262A34] focus:ring-[#C97873]"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
              className="flex h-9 w-9 flex-none items-center justify-center rounded-xl text-white transition disabled:opacity-40"
              style={{ background: "linear-gradient(135deg,#C97873,#D98F7E)" }}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ---------------- Floating toggle button ---------------- */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(135deg,#C97873,#D98F7E,#E4A98F)" }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 0 0 rgba(201,120,115,0.55)", animation: "chatw-ring 2.4s infinite" }}
          />
        )}
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        @keyframes chatw-pop {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chatw-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes chatw-ring {
          0% { box-shadow: 0 0 0 0 rgba(138,79,255,0.45); }
          70% { box-shadow: 0 0 0 12px rgba(201,120,115,0); }
          100% { box-shadow: 0 0 0 0 rgba(201,120,115,0); }
        }
      `}</style>
    </div>
  );
}