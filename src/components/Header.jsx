import Button from "./Button.jsx";
import { containerClass } from "../styles/classNames.js";

export default function Header() {
  return (
    <header className="py-[34px] pb-[26px] max-[640px]:pt-5">
      <div className={containerClass}>
        <nav className="flex items-center justify-between gap-6 max-[900px]:flex-wrap max-[640px]:items-start">
          <a href="#home" className="text-base font-medium tracking-[0.08em]">
            VERA XIAO
          </a>

          <ul className="flex list-none items-center gap-10 max-[900px]:gap-[22px] max-[640px]:w-full max-[640px]:flex-wrap max-[640px]:gap-y-[14px] max-[640px]:gap-x-[18px]">
            <li>
              <a href="#home" className="text-[0.98rem] font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-[0.98rem] font-medium">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="text-[0.98rem] font-medium">
                About
              </a>
            </li>
            <li>
              <Button href="#contact">Contact</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
