import "./styles.css";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import {
  conceptArtItems,
  featuredImage,
  illustrationItems,
  traditionalArtsImage,
} from "./items/images/portfolioImages.js";
import {
  bodyCopyClass,
  cardTitleClass,
  containerClass,
} from "./styles/classNames.js";

const traditionalArtItems = [
  {
    title: "Sketch",
    description: "Body text for whatever you'd like to expand on the main point.",
  },
  {
    title: "Watercolor",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.",
  },
  {
    title: "Oil painting",
    description:
      "Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.",
  },
];

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="px-0 py-[42px] pb-[90px] max-[640px]:pt-6 max-[640px]:pb-14">
          <div className={containerClass}>
            <div className="mb-11 grid grid-cols-[minmax(320px,560px)_1fr] items-start gap-8 max-[900px]:grid-cols-1">
              <div>
                <h1 className="font-display mb-[26px] max-w-[20ch] text-[clamp(3.25rem,5vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.02em] max-[640px]:max-w-none">
                  Creating Art That Speaks to the Soul
                </h1>
                <p className={`mb-[30px] max-w-[36rem] ${bodyCopyClass} text-[#5a5a5a]`}>
                  Contemporary artist exploring the boundaries of color, texture,
                  and emotion through various mediums.
                </p>
                <Button href="#portfolio">View Portfolio</Button>
              </div>
              <div />
            </div>

            <img
              className="h-[570px] w-full rounded-2xl object-cover object-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] max-[900px]:h-[420px] max-[640px]:h-[300px]"
              src={featuredImage.src}
              alt={featuredImage.alt}
            />
          </div>
        </section>

        <section id="portfolio" className="px-0 py-6 pb-20">
          <div className={containerClass}>
            <SectionHeader className="mb-[34px]">Illustration</SectionHeader>

            <div className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {illustrationItems.map((item) => (
                <article key={item.title}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="mb-7 aspect-[1.15/1] w-full rounded-2xl object-cover max-[640px]:mb-[18px]"
                  />
                  <div>
                    <h3 className={`${cardTitleClass} mb-[14px]`}>{item.title}</h3>
                    <p className={`${bodyCopyClass} max-w-[21ch] max-[900px]:max-w-none`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-0 py-6 pb-20 max-[640px]:pt-3 max-[640px]:pb-12">
          <div className={containerClass}>
            <div className="grid items-start gap-10 lg:grid-cols-2 max-[900px]:gap-8">
              <div className="flex h-full flex-col pt-[10px]">
                <SectionHeader className="mb-[56px] max-[900px]:mb-10">
                  Traditional Arts
                </SectionHeader>

                <div className="grid flex-1 gap-[28px] max-[900px]:mb-9 max-[900px]:gap-[24px]">
                  {traditionalArtItems.map((item) => (
                    <article key={item.title}>
                      <h5 className={`${cardTitleClass} mb-[10px]`}>{item.title}</h5>
                      <p className={`${bodyCopyClass} max-w-[20ch] max-[900px]:max-w-none`}>
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-[28px] max-[900px]:mt-9 max-[640px]:flex-col">
                  <Button href="#contact" className="max-[640px]:w-full">
                    Button
                  </Button>
                  <Button href="#portfolio" tone="gray" className="max-[640px]:w-full">
                    Secondary button
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src={traditionalArtsImage.src}
                  alt={traditionalArtsImage.alt}
                  className="h-[750px] w-full rounded-2xl object-cover max-[900px]:h-[520px] max-[640px]:h-[360px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-0 pt-3 pb-[100px] max-[640px]:pb-16">
          <div className={containerClass}>
            <SectionHeader className="mb-[58px] max-[640px]:mb-[34px]">
              Concept Art
            </SectionHeader>

            <div className="grid grid-cols-2 gap-[38px] max-[900px]:grid-cols-1 max-[900px]:gap-[34px]">
              {conceptArtItems.map((item) => (
                <article key={item.title}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="mb-7 h-[430px] w-full rounded-2xl object-cover max-[640px]:mb-[18px] max-[640px]:h-[280px]"
                  />
                  <div>
                    <h3 className={`${cardTitleClass} mb-[14px]`}>{item.title}</h3>
                    <p className={`${bodyCopyClass} max-w-[21ch] max-[900px]:max-w-none`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
