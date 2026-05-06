import Button from "../components/Button.jsx";
import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  bodyCopyClass,
  cardTitleClass,
  containerClass,
} from "../styles/classNames.js";

import EUCATASTROPHE_2Image from "../../assets/images/EUCATASTROPHE_2.png";

const featuredProduct = {
  title: "Concept Art",
  subtitle: "Character Design",
  price: "Providence End",
  description: `All that is under this sky is fashioned and woven by Heaven's Will.

Birth and demise, cycle and collapse, the rise and fall of all things—all are but cold, turning gears in the machinery of a supreme will.

Yet when the very rules that uphold the world begin rotting from its roots, heaven and earth break free from prescribed logic and descend into chaos and collapse.`,
  details: "Text box for additional details or fine print",
  image:
    EUCATASTROPHE_2Image,
  alt: "Main characters",
};

import jianghuiImage from "../../assets/images/jianghui.png";
import chongqingImage from "../../assets/images/chongqing.png";
import mizhuguangImage from "../../assets/images/mizhuguang.png";
import jiebobiImage from "../../assets/images/jiebobi.png";
import suiyinImage from "../../assets/images/suiyin.png";
import OathImage from "../../assets/images/Oath.png";

const relatedProducts = [
  {
    title: "HUI JIANG",
    description: "A wandering knight-errant",
    price: "",
    image:
      jianghuiImage,
    alt: "A battlefield where various forces contend for control of the cosmic order.",
     objectPosition: "object-left",
  },
  {
    title: "Chongqing",
    description: "An Awakened Priestess",
    price: "",
    image:
      chongqingImage,
    alt: "A devout guardian becomes the most resolute judge.",
    objectPosition: "object-left",
  },
  {
    title: "Zhuguang Mi",
    description: "A warrior of Vengeance",
    price: "",
    image:
      mizhuguangImage,
    alt: "A princess once robbed of her free will, who vows to wash away the shame of her manipulation with the blood of her enemies.",
      objectPosition: "object-left",
  },
  {
    title: "Bobi Jie",
    description: "A creation neither human nor beast",
    price: "",
    image:
      jiebobiImage,
    alt: "I am the feral god. I am its cage.",
      objectPosition: "object-left",
  },
  {
    title: "Suiyin",
    description: "A forgotten paragon of antiquity",
    price: "",
    image:
      suiyinImage,
    alt: "A consciousness condemned, suppressed, instrumentalized, and ultimately devoured for ideals that defied orthodoxy.",
      objectPosition: "object-left",
  },
  {
    title: "Oath to Burn the Chains",
    description: "Illustration",
    price: "",
    image:
      OathImage,
    alt: "Between the legends of deities and the villagers' madness, they must uncover a truth steeped in blood—or become the next sacrifice.",
  },
];

export default function ConceptArtPage() {
  return (
    <main className="px-0 pt-4 pb-24 max-[640px]:pt-2 max-[640px]:pb-16">
      <section>
        <div className={`${containerClass} grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] max-[900px]:grid-cols-1`}>
          <ImageWrapper
            src={featuredProduct.image}
            alt={featuredProduct.alt}
            className="h-[700px] w-full max-[1100px]:h-[620px] max-[900px]:h-[460px] max-[640px]:h-[300px]"
            imgClassName="rounded-[18px] object-cover"
          />

          <div className="max-w-[38rem] pt-2">
            <SectionHeader className="mb-7">
              {featuredProduct.title}
            </SectionHeader>

            <p className={`mb-8 ${bodyCopyClass} text-[#8a8a8a]`}>
              {featuredProduct.subtitle}
            </p>

            <p className="mb-10 text-[clamp(1.8rem,2.8vw,2.6rem)] leading-[1.05] font-medium text-black">
              {featuredProduct.price}
            </p>

            <p className={`mb-10 max-w-[24ch] ${bodyCopyClass} text-[#7f7f7f] max-[900px]:max-w-none whitespace-pre-line`}>
  {featuredProduct.description}
</p>

          </div>
        </div>
      </section>

      <section className="px-0 pt-22 max-[900px]:pt-18 max-[640px]:pt-14">
        <div className={containerClass}>
          <SectionHeader className="mb-12 max-[640px]:mb-8">
            Character Concept
          </SectionHeader>

          <div className="grid grid-cols-3 gap-x-9 gap-y-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {relatedProducts.map((item, index) => (
              <article key={`${item.title}-${index}`}>
                <ImageWrapper
                  src={item.image}
                  alt={item.alt}
                  className="mb-6 aspect-[1.15/1] w-full max-[640px]:mb-4"
                  imgClassName={`rounded-[16px] object-cover ${item.objectPosition || ''}`}
                />
                <div className="max-w-[26rem]">
                  <h3 className={`${cardTitleClass} mb-2`}>{item.title}</h3>
                  <p className={`${bodyCopyClass} text-[#7f7f7f]`}>
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
      </section>
    </main>
  );
}
