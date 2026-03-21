import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import {
  containerClass,
  footerHeadingClass,
  footerTextClass,
} from "../styles/classNames.js";

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex size-[34px] items-center justify-center text-[#8b8b8b] max-[640px]:size-[30px]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="block size-7 fill-current max-[640px]:size-6"
      >
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="mt-[10px]">
      <section className="border-y border-[#d8d8d8] px-0 py-[78px] pb-[66px] max-[640px]:py-12 max-[640px]:pb-[42px]">
        <div className={`${containerClass} flex items-center justify-between gap-8 max-[900px]:grid max-[900px]:justify-stretch`}>
          <SectionHeader>Section heading</SectionHeader>
          <div className="flex flex-wrap gap-7 max-[640px]:gap-4">
            <Button href="#portfolio">Button</Button>
            <Button href="#about" tone="gray">
              Secondary button
            </Button>
          </div>
        </div>
      </section>

      <section className="px-0 py-[62px] pb-[58px] max-[640px]:py-[42px] max-[640px]:pb-[46px]">
        <div className={`${containerClass} grid grid-cols-[1.15fr_0.8fr_1fr] items-start gap-12 max-[900px]:grid-cols-1 max-[640px]:gap-[34px]`}>
          <div>
            <a
              href="#home"
              className="mb-[110px] inline-block text-[clamp(2rem,3vw,2.3rem)] font-medium tracking-[0.01em] max-[900px]:mb-11 max-[640px]:mb-7"
            >
              VERA XIAO
            </a>

            <div className="flex flex-wrap gap-[22px] max-[640px]:gap-[14px]" aria-label="Social links">
              <SocialIcon label="Facebook">
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3v2.4H8.4v3.2h2.7V22h2.4Z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <path d="M6.3 8.8A1.9 1.9 0 1 1 6.3 5a1.9 1.9 0 0 1 0 3.8ZM4.9 9.9h2.8V19H4.9V9.9Zm4.6 0H12v1.2h.1c.3-.6 1.2-1.5 2.6-1.5 2.8 0 3.3 1.8 3.3 4.2V19h-2.8v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19H9.5V9.9Z" />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <path d="M21.3 7.2a2.9 2.9 0 0 0-2-2C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2.2 12a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8ZM10.2 15.1V8.9l5.2 3.1-5.2 3.1Z" />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <path d="M12 7.1A4.9 4.9 0 1 0 12 17a4.9 4.9 0 0 0 0-9.9Zm0 8.1A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm6.2-8.3a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Zm3 1.1c-.1-1-.3-1.8-.8-2.6a5.3 5.3 0 0 0-1.9-1.9c-.7-.4-1.6-.7-2.6-.8C15 2.6 14.7 2.6 12 2.6s-3 0-3.9.1c-1 .1-1.8.3-2.6.8a5.3 5.3 0 0 0-1.9 1.9c-.4.7-.7 1.6-.8 2.6C2.6 9 2.6 9.3 2.6 12s0 3 .1 3.9c.1 1 .3 1.8.8 2.6a5.3 5.3 0 0 0 1.9 1.9c.7.4 1.6.7 2.6.8.9.1 1.2.1 3.9.1s3 0 3.9-.1c1-.1 1.8-.3 2.6-.8a5.3 5.3 0 0 0 1.9-1.9c.4-.7.7-1.6.8-2.6.1-.9.1-1.2.1-3.9s0-3-.1-3.9Zm-1.8 7.7c-.1.8-.2 1.2-.4 1.6-.2.5-.5.8-.9 1.2-.4.4-.7.7-1.2.9-.4.2-.8.3-1.6.4-.8 0-1 .1-3.3.1s-2.5 0-3.3-.1c-.8-.1-1.2-.2-1.6-.4-.5-.2-.8-.5-1.2-.9-.4-.4-.7-.7-.9-1.2-.2-.4-.3-.8-.4-1.6 0-.8-.1-1-.1-3.3s0-2.5.1-3.3c.1-.8.2-1.2.4-1.6.2-.5.5-.8.9-1.2.4-.4.7-.7 1.2-.9.4-.2.8-.3 1.6-.4.8 0 1-.1 3.3-.1s2.5 0 3.3.1c.8.1 1.2.2 1.6.4.5.2.8.5 1.2.9.4.4.7.7.9 1.2.2.4.3.8.4 1.6 0 .8.1 1 .1 3.3s0 2.5-.1 3.3Z" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className={`mb-[30px] font-medium ${footerHeadingClass}`}>Quick Links</h3>
            <nav className="grid gap-6" aria-label="Footer">
              <a href="#home" className={footerTextClass}>
                Home
              </a>
              <a href="#portfolio" className={footerTextClass}>
                Portfolio
              </a>
              <a href="#about" className={footerTextClass}>
                About
              </a>
            </nav>
          </div>

          <div>
            <h3 className={`mb-[30px] font-medium ${footerHeadingClass}`}>Contact:</h3>
            <div className="grid gap-6">
              <p className={footerTextClass}>Email: veraxiao030@gmail.com</p>
              <p className={footerTextClass}>Instagram: @VERA.0301212</p>
              <p className={footerTextClass}>Page</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
