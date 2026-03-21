import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { containerClass } from "../styles/classNames.js";

function NavItem({ to, children, className = "", underlineClassName = "" }) {
  return (
    <NavLink
      to={to}
      className={[
        "group relative inline-flex items-center justify-center px-1 py-2 text-[0.98rem] font-medium transition-transform duration-300 ease-out",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "absolute inset-x-1 bottom-1 h-px origin-left scale-x-0 bg-black/65 transition-transform duration-300 ease-out group-hover:scale-x-100",
          underlineClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="relative z-10">{children}</span>
    </NavLink>
  );
}

function ExpandedNavItem({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={[
        "group/subnav relative inline-flex items-center justify-center px-1 py-2 text-[0.98rem] font-medium transition-all duration-200 ease-out active:scale-[0.98] active:bg-black/8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-1 bottom-1 h-px origin-left scale-x-75 border-b border-dashed border-black/60 opacity-0 transition duration-300 ease-out group-hover/subnav:scale-x-100 group-hover/subnav:opacity-100"
      />
      <span className="relative z-10">{children}</span>
    </NavLink>
  );
}

function PortfolioMenu({ open, onOpenChange, className = "" }) {
  const items = [
    { to: "/illustration", label: "Illustration" },
    { to: "/traditional-arts", label: "Traditional Arts" },
    { to: "/concept-art", label: "Concept Art" },
  ];

  return (
    <div
      className={["group relative lg:flex lg:items-center", className].filter(Boolean).join(" ")}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <NavLink
        to="/illustration"
        className={[
          "relative inline-flex items-center justify-center px-1 py-2 text-[0.98rem] font-medium transition-transform duration-300 ease-out",
          open ? "lg:-translate-x-4" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "absolute inset-x-1 bottom-1 h-px origin-left scale-x-0 bg-black/65 transition-transform duration-300 ease-out group-hover:scale-x-100",
            open ? "lg:scale-x-0 lg:group-hover:scale-x-0" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
        <span className="relative z-10">Portfolio</span>
      </NavLink>

      <div
        className={[
          "hidden overflow-hidden transition-all duration-300 ease-out lg:flex lg:items-center",
          open ? "lg:ml-4 lg:max-w-[520px] lg:opacity-100" : "lg:ml-0 lg:max-w-0 lg:opacity-0",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="lg:flex lg:items-center lg:gap-4 lg:whitespace-nowrap">
          {items.map((item) => (
            <ExpandedNavItem key={item.to} to={item.to} className="px-1">
              {item.label}
            </ExpandedNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  return (
    <header className="py-[34px] pb-[26px] max-[640px]:pt-5">
      <div className={containerClass}>
        <nav className="flex items-center justify-between gap-6 max-[900px]:flex-wrap max-[640px]:items-start">
          <Link to="/" className="text-base font-medium tracking-[0.08em]">
            VERA XIAO
          </Link>

          <ul className="flex list-none items-center gap-10 max-[900px]:gap-[22px] max-[640px]:w-full max-[640px]:flex-wrap max-[640px]:gap-y-[14px] max-[640px]:gap-x-[18px]">
            <li>
              <NavItem
                to="/"
                className={portfolioOpen ? "lg:-translate-x-4" : ""}
                underlineClassName={portfolioOpen ? "lg:scale-x-0" : ""}
              >
                Home
              </NavItem>
            </li>
            <li>
              <div className="hidden lg:block">
                <PortfolioMenu open={portfolioOpen} onOpenChange={setPortfolioOpen} />
              </div>

              <div className="relative lg:hidden">
                <div className="flex items-center gap-1">
                  <NavItem to="/illustration">Portfolio</NavItem>
                  <button
                    type="button"
                    className={[
                      "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 active:scale-95",
                      mobilePortfolioOpen ? "bg-black/10 text-black" : "hover:bg-black/5 active:bg-black/10",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setMobilePortfolioOpen((current) => !current)}
                    aria-expanded={mobilePortfolioOpen}
                    aria-controls="mobile-portfolio-menu"
                    aria-label="Toggle portfolio menu"
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "inline-flex items-center justify-center transition-transform duration-300 ease-out",
                        mobilePortfolioOpen ? "rotate-180" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3 stroke-current"
                        fill="none"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.25 4.5 6 8.25 9.75 4.5" />
                      </svg>
                    </span>
                  </button>
                </div>

                <div
                  id="mobile-portfolio-menu"
                  className={[
                    "absolute left-0 top-full z-20 mt-2 w-52 rounded-2xl border border-black/8 bg-[#f3f0e5]/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 ease-out",
                    mobilePortfolioOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-95 opacity-0",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="grid gap-1">
                    <ExpandedNavItem to="/illustration" className="w-full justify-start rounded-lg px-2 hover:bg-black/5">
                      Illustration
                    </ExpandedNavItem>
                    <ExpandedNavItem to="/traditional-arts" className="w-full justify-start rounded-lg px-2 hover:bg-black/5">
                      Traditional Arts
                    </ExpandedNavItem>
                    <ExpandedNavItem to="/concept-art" className="w-full justify-start rounded-lg px-2 hover:bg-black/5">
                      Concept Art
                    </ExpandedNavItem>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavItem to="/about">About</NavItem>
            </li>
            <li>
              <Button to="/about">Contact</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
