import React from "react";
import "./styles/CustomLogo.css";

/**
 * Logo — "Dahm. studios"
 *
 * Props
 * ─────
 * size   : "sm" | "md" | "lg" | "xl"   (default "md")
 * color  : "dark" | "white" | "blue"   (default "dark")
 * href   : string                       (default "#")
 * scale  : number                       (CSS --logo-scale override, e.g. 1.5)
 * as     : "a" | "div" | "span"        (default "a")
 */
export default function CustomLogo({
  size = "md",
  color = "dark",
  href = "#",
  scale,
  className = "",
  as: Tag = "a",
}) {
  const colorClass =
    color === "white" ? "logo--white"
    : color === "blue" ? "logo--blue"
    : "";                               // default = dark (#0a0a0a)

  const sizeClass = `logo--${size}`;

  const inlineStyle = scale ? { "--logo-scale": scale } : {};

  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      className={`logo__root ${sizeClass} ${colorClass} ${className}`.trim()}
      style={inlineStyle}
      aria-label="Dahm Studios"
    >
      <div className="logo__word-group">
        {/* "studios" sits above the main wordmark, offset right */}
        <span className="logo__sub" aria-hidden="true">studios</span>

        {/* Main wordmark */}
        <span className="logo__wordmark" aria-hidden="true">
          <span className="logo__letter-D">D</span>
          <span className="logo__letter-a">a</span>
          <span className="logo__letter-hm">hm</span>
          <span className="logo__period">.</span>
        </span>
      </div>
    </Tag>
  );
}