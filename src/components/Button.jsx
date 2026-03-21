import { useState } from "react";
import { Link } from "react-router-dom";

export default function Button({
  href = "#",
  to,
  children,
  tone = "standard",
  className = "",
}) {
  const [hoverState, setHoverState] = useState({ active: false, x: 50, y: 50 });
  const toneClassName = tone === "gray" ? "bg-[#c7c7c7] text-[#111111]" : "bg-black text-white";
  const overlayGradient =
    tone === "gray"
      ? `radial-gradient(circle at ${hoverState.x}% ${hoverState.y}%, #f2f2f2 0%, #dddddd 32%, #b9b9b9 72%, #a9a9a9 100%)`
      : `radial-gradient(circle at ${hoverState.x}% ${hoverState.y}%, #8b5a1b 0%, #5c3b14 28%, #23160c 68%, #0b0b0b 100%)`;
  const classes = [
    "group relative inline-flex items-center justify-center overflow-hidden rounded-[10px] px-6 py-3.5 text-base font-medium transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]",
    toneClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setHoverState({ active: true, x, y });
  }

  const sharedProps = {
    className: classes,
    onMouseEnter: handlePointerMove,
    onMouseMove: handlePointerMove,
    onMouseLeave: () => setHoverState((current) => ({ ...current, active: false })),
  };

  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: overlayGradient,
          opacity: hoverState.active ? 1 : 0,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-[-20%] w-12 -skew-x-12 blur-md transition-transform duration-500 ease-out group-hover:translate-x-[260px]"
        style={{
          backgroundColor: tone === "gray" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} {...sharedProps}>
      {content}
    </a>
  );
}
