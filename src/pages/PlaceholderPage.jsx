import SectionHeader from "../components/SectionHeader.jsx";
import { bodyCopyClass, containerClass } from "../styles/classNames.js";

export default function PlaceholderPage({ title, description }) {
  return (
    <main className="px-0 py-16 pb-24 max-[640px]:py-10 max-[640px]:pb-16">
      <div className={containerClass}>
        <SectionHeader className="mb-8">{title}</SectionHeader>
        <div className="max-w-[42rem] rounded-3xl border border-black/8 bg-[#f3f0e5]/70 p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
          <p className={bodyCopyClass}>{description}</p>
        </div>
      </div>
    </main>
  );
}
