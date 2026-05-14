import "./SlotText.css";

export default function SlotText({ text, hoverText, className = "" }) {
  const top = hoverText || text; // if no hoverText, same char slides in

  return (
    <span className={`slot-word ${className}`}>
      {[...text].map((ch, i) => (
        <span key={i} className="slot-char" style={{ "--i": i }}>
          <span className="slot-char-inner">
            <span className="slot-char-top">{top[i] ?? ch}</span>
            <span className="slot-char-bot">{ch}</span>
          </span>
        </span>
      ))}
    </span>
  );
}