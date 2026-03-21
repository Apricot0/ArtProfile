export default function Button({
  href = "#",
  children,
  tone = "standard",
  className = "",
}) {
  const toneClassName =
    tone === "gray"
      ? "bg-[#e1e1e1] text-[#111111]"
      : "bg-black text-white";
  const classes = [
    "inline-flex items-center justify-center rounded-[10px] px-6 py-3.5 text-base font-medium transition duration-200 ease-out hover:-translate-y-px hover:opacity-92",
    toneClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
