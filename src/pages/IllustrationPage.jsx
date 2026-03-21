import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  bodyCopyClass,
  cardTitleClass,
  containerClass,
} from "../styles/classNames.js";

const heroImage = {
  src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80",
  alt: "Still life illustration with fruit, paper, and a crystal glass",
};

const articleParagraphs = [
  "Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:",
  "Excepteur efficient emerging, minim veniam anim aute carefully curated conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zurich sleepy perfect consectetur.",
  "Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat. Id mollit sunt officia adipisicing. Perfectly crafted emerging laboris posuere commodo, bespoke aliqua artisan. Thoughtful tempor city-guide minim anim, curated typography and tactile imagery est adipisicing. Gentle rhythm in layout, reflective pacing, and warm natural tones help the work feel collected instead of crowded.",
  "Aute quiet luxury pariatur incididunt, narrative composition cillum non. Through illustration, the goal is to create scenes that feel intimate and cinematic at once, blending softness, material texture, and intentional negative space into a page that invites people to slow down and stay with the work.",
];

const relatedArticles = [
  {
    title: "Seasonal Study",
    author: "Vera Xiao",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Radishes arranged on a pale surface",
  },
  {
    title: "Morning Cherries",
    author: "Vera Xiao",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    alt: "Cherries casting soft shadows on a light background",
  },
  {
    title: "Quiet Forms",
    author: "Vera Xiao",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    alt: "Mushrooms scattered across a bright tabletop",
  },
];

export default function IllustrationPage() {
  return (
    <main className="px-0 pt-6 pb-24 max-[640px]:pt-2 max-[640px]:pb-16">
      <section>
        <div className={containerClass}>
          <div className="max-w-[860px]">
            <SectionHeader className="mb-7 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] tracking-[-0.06em] max-[640px]:mb-5">
              Illustration
            </SectionHeader>

            <p className="max-w-[880px] text-[clamp(0.45rem,2vw,1.2rem)] leading-[1.38] font-normal text-black/70 max-[640px]:max-w-none max-[640px]:text-[1.28rem]">
              Subheading that sets up context, shares more info about the
              author, or generally gets people psyched to keep reading.
            </p>
          </div>

          <ImageWrapper
            src={heroImage.src}
            alt={heroImage.alt}
            className="mt-20 h-[730px] w-full max-[1100px]:h-[620px] max-[900px]:mt-14 max-[900px]:h-[460px] max-[640px]:mt-10 max-[640px]:h-[280px]"
            imgClassName="rounded-[20px] object-cover"
          />

          <article className="mx-auto mt-24 max-w-[760px] max-[900px]:mt-16 max-[640px]:mt-12">
            {articleParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={[
                  "text-[clamp(1.18rem,1.5vw,1.65rem)] leading-[1.55] text-black",
                  index === 0 ? "font-normal" : "",
                  index > 0 ? "mt-12 max-[640px]:mt-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {paragraph}
              </p>
            ))}
          </article>

          <section className="pt-28 max-[900px]:pt-20 max-[640px]:pt-14">
            <SectionHeader className="mb-14 max-[640px]:mb-8">
              Related articles or posts
            </SectionHeader>

            <div className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {relatedArticles.map((item) => (
                <article key={item.title}>
                  <ImageWrapper
                    src={item.image}
                    alt={item.alt}
                    className="mb-7 aspect-[1.15/1] w-full max-[640px]:mb-[18px]"
                  />
                  <div>
                    <h3 className={`${cardTitleClass} mb-[10px]`}>{item.title}</h3>
                    <p className={`${bodyCopyClass} max-[900px]:max-w-none`}>
                      {item.author}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
