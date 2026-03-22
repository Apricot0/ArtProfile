import { useState, useEffect, useCallback } from "react";
 
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
 
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "lb-in 180ms ease",
        cursor: "zoom-out",
      }}
    >
      <style>{`
        @keyframes lb-in {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes img-in {
          from { opacity: 0; transform: scale(0.93) }
          to   { opacity: 1; transform: scale(1) }
        }
      `}</style>
 
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: "fixed",
          top: 20,
          right: 24,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "50%",
          width: 40,
          height: 40,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 20,
          lineHeight: 1,
          transition: "background 150ms",
          zIndex: 10000,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        ×
      </button>
 
      {/* Image */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "88vh",
          borderRadius: 16,
          boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
          objectFit: "contain",
          cursor: "default",
          animation: "img-in 200ms ease",
          userSelect: "none",
        }}
      />
 
      {/* Alt caption */}
      {alt && (
        <p
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.55)",
            fontSize: 13,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "80vw",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            pointerEvents: "none",
          }}
        >
          {alt}
        </p>
      )}
    </div>
  );
}
 
export default function ImageWrapper({
  src,
  alt,
  className = "",
  imgClassName = "",
  shadow = false,
}) {
  const [open, setOpen] = useState(false);
 
  const wrapperClasses = ["group", className].filter(Boolean).join(" ");
  const imageClasses = [
    "h-full w-full rounded-2xl object-cover transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.14)]",
    shadow ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)]" : "",
    imgClassName,
  ]
    .filter(Boolean)
    .join(" ");
 
  return (
    <>
      <div className={wrapperClasses} style={{ position: "relative" }}>
        <img src={src} alt={alt} className={imageClasses} />
 
        {/* Zoom trigger overlay */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open full preview"
          style={{
            position: "absolute",
            inset: 0,
            background: "transparent",
            border: "none",
            borderRadius: "inherit",
            cursor: "zoom-in",
            width: "100%",
            height: "100%",
          }}
        />
 
        {/* Zoom icon badge */}
        <span
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            borderRadius: 8,
            padding: "4px 7px",
            color: "#fff",
            fontSize: 13,
            lineHeight: 1,
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 200ms",
          }}
          className="zoom-badge"
        >
          ⤢
        </span>
 
        <style>{`
          .group:hover .zoom-badge { opacity: 1 !important; }
        `}</style>
      </div>
 
      {open && (
        <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
