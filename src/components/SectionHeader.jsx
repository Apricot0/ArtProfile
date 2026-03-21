export default function SectionHeader({ children, className = "" }) {
  const classes = [
    "text-[clamp(2.2rem,4vw,3.2rem)] leading-[0.98] font-bold tracking-[-0.04em]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <h2 className={classes}>{children}</h2>;
}
