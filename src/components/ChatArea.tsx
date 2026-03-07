import { EMPATHY_WORDS } from "../data/scenarios";

export type ChatMessage = {
  id: string;
  type: "user" | "agent";
  text: string;
  visibleLength?: number;
  highlightWords?: boolean;
};

type ChatAreaProps = {
  messages: ChatMessage[];
  isNearu?: boolean;
};

function highlightEmpathyWords(text: string): string {
  if (!text) return "";
  let out = text;
  const re = new RegExp(
    `\\b(${EMPATHY_WORDS.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
    "gi"
  );
  return out.replace(re, "<span class=\"hl\">$1</span>");
}

export function ChatArea({ messages, isNearu }: ChatAreaProps) {
  return (
    <div
      style={{
        minHeight: 180,
        maxHeight: 240,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 0",
      }}
    >
      {messages.map((msg) => {
        const isUser = msg.type === "user";
        const displayText =
          msg.visibleLength !== undefined
            ? msg.text.slice(0, msg.visibleLength)
            : msg.text;
        const content =
          isNearu && msg.type === "agent" && msg.highlightWords
            ? highlightEmpathyWords(displayText)
            : displayText;

        return (
          <div
            key={msg.id}
            style={{
              alignSelf: isUser ? "flex-start" : "flex-end",
              maxWidth: "85%",
              padding: "10px 14px",
              borderRadius: isUser ? "10px 10px 10px 3px" : "10px 3px 10px 10px",
              background: isUser
                ? "var(--bg-card)"
                : isNearu
                  ? "var(--blue-glow)"
                  : "var(--bg-card)",
              border: `1px solid ${isNearu && msg.type === "agent" ? "var(--blue-border)" : "var(--border-md)"}`,
              fontSize: 14,
              color: isUser ? "var(--text)" : "var(--text-muted)",
              animation: "chatBubbleIn 0.3s ease forwards",
            }}
            className={msg.type === "agent" && isNearu ? "chat-bubble" : ""}
          >
            {msg.type === "agent" && msg.highlightWords && content ? (
              <span dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
}
