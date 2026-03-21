export default function Button({
  href = "#",
  children,
  tone = "standard",
  className = "",
}) {
  const toneClassName =
    tone === "gray" ? "traditional-btn-secondary" : "traditional-btn-primary";
  const classes = ["traditional-btn", toneClassName, className].filter(Boolean).join(" ");

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
