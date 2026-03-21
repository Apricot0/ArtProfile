import Button from "../components/Button.jsx";
import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { bodyCopyClass, containerClass } from "../styles/classNames.js";

const heroImage = {
  src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80",
  alt: "Pears arranged in a bright still life composition",
};

const featureImage = {
  src: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=1400&q=80",
  alt: "Two pears placed on a pale tabletop",
};

const spotlightImage = {
  src: "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=1400&q=80",
  alt: "Watermelon slices arranged on a bright surface",
};

const galleryFeatureImage = {
  src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80",
  alt: "Pear composition in a traditional still life study",
};

const galleryCards = [
  {
    title: "Product",
    description: "Description of top product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Two pears in a minimalist tabletop composition",
  },
  {
    title: "Product",
    description: "Description of top product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    alt: "Mushrooms arranged with soft shadows",
  },
];

const detailItems = [
  {
    title: "Subheading",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Subheading",
    description:
      "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    title: "Subheading",
    description:
      "Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7V5a5 5 0 0 1 10 0v2" />
        <rect x="4" y="7" width="16" height="13" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Subheading",
    description:
      "Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
      </svg>
    ),
  },
];

export default function TraditionalArtsPage() {
  return (
    <main className="px-0 pb-24 max-[640px]:pb-16">
      <section className="relative min-h-[720px] overflow-hidden max-[900px]:min-h-[620px] max-[640px]:min-h-[520px]">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.18))]" />
        </div>

        <div className="relative z-10 flex min-h-[720px] items-center justify-center px-8 py-20 text-center max-[900px]:min-h-[620px] max-[640px]:min-h-[520px] max-[640px]:px-4">
          <div className="max-w-[920px]">
            <SectionHeader className="mb-7 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] tracking-[-0.06em] text-white max-[640px]:mb-5">
              Traditional Arts
            </SectionHeader>

            <p className="mx-auto max-w-[880px] text-[clamp(1.45rem,2vw,2.2rem)] leading-[1.38] font-normal text-white/90 max-[640px]:max-w-none max-[640px]:text-[1.28rem]">
              Subheading with description of your practice, process, or the
              kinds of handmade studies featured in this collection.
            </p>

            <div className="mt-12 flex justify-center max-[640px]:mt-9">
              <Button to="/about">View Inquiry</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-24 max-[900px]:py-18 max-[640px]:py-14">
        <div className={`${containerClass} grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,620px)] max-[900px]:gap-10`}>
          <div className="max-w-[560px]">
            <SectionHeader className="mb-[34px] max-[640px]:mb-6">
              Heading
            </SectionHeader>

            <p className={`max-w-[28ch] ${bodyCopyClass} text-[#5a5a5a] max-[900px]:max-w-none`}>
              A subheading for this section, as long or as short as you like.
            </p>

            <div className="mt-12 flex flex-wrap gap-5 max-[640px]:mt-8 max-[640px]:flex-col">
              <Button to="/about" className="max-[640px]:w-full">
                Button
              </Button>
              <Button to="/illustration" tone="gray" className="max-[640px]:w-full">
                Secondary button
              </Button>
            </div>
          </div>

          <ImageWrapper
            src={featureImage.src}
            alt={featureImage.alt}
            className="h-[520px] w-full max-[900px]:h-[420px] max-[640px]:h-[280px]"
            imgClassName="rounded-[16px] object-cover"
          />
        </div>
      </section>

      <section className="px-0 pt-4 pb-22 max-[900px]:pb-18 max-[640px]:pb-14">
        <div className={`${containerClass} grid items-center gap-14 lg:grid-cols-[minmax(420px,620px)_minmax(0,1fr)] max-[900px]:gap-10`}>
          <ImageWrapper
            src={spotlightImage.src}
            alt={spotlightImage.alt}
            className="h-[450px] w-full max-[900px]:order-2 max-[900px]:h-[380px] max-[640px]:h-[260px]"
            imgClassName="rounded-[16px] object-cover"
          />

          <div className="max-w-[500px] justify-self-end max-[900px]:max-w-[560px] max-[900px]:justify-self-start">
            <SectionHeader className="mb-[34px] max-[640px]:mb-6">
              Heading
            </SectionHeader>

            <p className={`max-w-[26ch] ${bodyCopyClass} text-[#5a5a5a] max-[900px]:max-w-none`}>
              A subheading for this section, as long or as short as you like.
            </p>

            <div className="mt-12 flex flex-wrap gap-5 max-[640px]:mt-8 max-[640px]:flex-col">
              <Button to="/about" className="max-[640px]:w-full">
                Button
              </Button>
              <Button to="/illustration" tone="gray" className="max-[640px]:w-full">
                Secondary button
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 pt-10 pb-10 max-[640px]:pt-4">
        <div className={containerClass}>
          <SectionHeader className="mb-12 max-[640px]:mb-8">
            Section heading
          </SectionHeader>

          <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.8fr)] max-[900px]:grid-cols-1">
            <ImageWrapper
              src={galleryFeatureImage.src}
              alt={galleryFeatureImage.alt}
              className="h-[760px] w-full max-[1100px]:h-[680px] max-[900px]:h-[520px] max-[640px]:h-[360px]"
              imgClassName="rounded-[16px] object-cover"
            />

            <div className="grid gap-10">
              {galleryCards.map((item, index) => (
                <article key={`${item.title}-${index}`}>
                  <ImageWrapper
                    src={item.image}
                    alt={item.alt}
                    className="mb-6 h-[310px] w-full max-[640px]:mb-4 max-[640px]:h-[240px]"
                    imgClassName="rounded-[16px] object-cover"
                  />
                  <div className="max-w-[26rem]">
                    <h3 className="mb-2 text-[clamp(1.3rem,1.8vw,1.7rem)] leading-[1.12] font-medium">
                      {item.title}
                    </h3>
                    <p className={`${bodyCopyClass} text-[#7d7d7d]`}>
                      {item.description}
                    </p>
                    <p className="mt-2 text-[clamp(1.2rem,1.6vw,1.55rem)] leading-[1.2] font-medium text-black">
                      {item.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 pt-16 pb-6 max-[900px]:pt-12 max-[640px]:pt-8">
        <div className={containerClass}>
          <SectionHeader className="mb-14 max-[640px]:mb-10">
            Section heading
          </SectionHeader>

          <div className="grid gap-x-28 gap-y-16 md:grid-cols-2 max-[900px]:gap-x-16 max-[640px]:gap-y-12">
            {detailItems.map((item, index) => (
              <article key={`${item.title}-${index}`} className="max-w-[34rem]">
                <div className="mb-5 text-[#4f4f4f]">{item.icon}</div>
                <h3 className="mb-4 text-[clamp(1.7rem,2.5vw,2.2rem)] leading-[1.08] font-medium text-black">
                  {item.title}
                </h3>
                <p className="max-w-[22ch] text-[clamp(1.18rem,1.8vw,1.6rem)] leading-[1.5] text-[#8a8a8a] max-[900px]:max-w-none">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
