export default function ImageWrapper({
  src,
  alt,
  className = "",
  imgClassName = "",
  shadow = false,
}) {
  const wrapperClasses = [className].filter(Boolean).join(" ");
  const imageClasses = [
    "h-full w-full rounded-2xl object-cover transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.14)]",
    shadow ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)]" : "",
    imgClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={["group", wrapperClasses].filter(Boolean).join(" ")}>
      <img src={src} alt={alt} className={imageClasses} />
    </div>
  );
}
