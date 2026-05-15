import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  bodyCopyClass,
  cardTitleClass,
  containerClass,
} from "../styles/classNames.js";

import DotRImage from "../../assets/images/DotR.jpg";

const heroImage = {
  src: DotRImage,
  alt: "Book Cover: A VISUAL INTERPRETATION OF DREAM OF THE RED CHAMBER",
};

const articleParagraphs = [
 
];

import hlm1Image from "../../assets/images/hlm1.jpeg";
import hlm2Image from "../../assets/images/hlm2.jpeg";
import hlm3Image from "../../assets/images/hlm3.jpeg";

const relatedArticles = [
  {
    title: "Riverbank Guardian",
    author: "DREAM OF THE RED CHAMBER",
    image:
      hlm1Image,
    alt: "A young attendant of the gods would come to the riverside each day to water the plant, talk to it, and share all his joys and sorrows.",
  },
  {
    title: "Shelter in Storm",
    author: "DREAM OF THE RED CHAMBER",
    image:
      hlm2Image,
    alt: "When storms approached, he would stay by the water, guarding her until the wind and rain had passed.",
  },
  {
    title: "Plant Maiden Awakens",
    author: "DREAM OF THE RED CHAMBER",
    image:
      hlm3Image,
    alt: "After many years, the plant took the form of a beautiful maiden.",
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
              It covers commercial illustrations, publications and picture books, advertisements, artistic decorations, cartoon mascots and film posters, etc.
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
              Dream of the Red Chamber Series
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
