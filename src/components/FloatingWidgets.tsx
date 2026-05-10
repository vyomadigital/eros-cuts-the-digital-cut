import { useState } from "react";
import { MessageCircle, Sparkles, Send, X } from "lucide-react";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: "Hi — I'm Eros Concierge. Looking to book or curious about a service?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const u = input.trim();
    setMessages((m) => [...m, { role: "user", text: u }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text:
            /book|appoint|slot/i.test(u)
              ? "Perfect — we have 14:30, 15:15 and 17:45 free today. Tap Book Session to lock one in."
              : /price|cost|how much/i.test(u)
              ? "Our Signature Cut is Rs 1,500 and The Royal package is Rs 3,500. Want me to walk you through it?"
              : "Got it — one of our stylists will follow up. Meanwhile feel free to explore the gallery.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/9779800000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-black shadow-luxury hover:scale-105 transition-transform"
      >
        <MessageCircle size={20} />
      </a>

      {/* AI Concierge */}
      <button
        onClick={() => setChatOpen((v) => !v)}
        aria-label="AI Concierge"
        className="fixed bottom-6 right-20 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-gold hover:border-gold/60 transition-colors"
      >
        {chatOpen ? <X size={18} /> : <Sparkles size={18} />}
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-2rem))] rounded-2xl border border-border bg-card shadow-luxury overflow-hidden animate-fade-up">
          <div className="px-4 py-3 border-b border-border bg-gradient-to-r from-secondary to-card">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="font-display text-sm">Eros Concierge</span>
              <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-gold/80">AI</span>
            </div>
          </div>
          <div className="px-4 py-4 max-h-72 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm rounded-xl px-3 py-2 ${
                  m.role === "ai"
                    ? "bg-secondary text-foreground"
                    : "ml-auto bg-gold text-gold-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="border-t border-border p-2 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about booking, prices…"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={send}
              className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground hover:opacity-90"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
