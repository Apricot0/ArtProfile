import Button from "../components/Button.jsx";
import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  bodyCopyClass,
  cardTitleClass,
  containerClass,
} from "../styles/classNames.js";

const featuredProduct = {
  title: "Concept Art",
  subtitle: "Subheading",
  price: "$10.99",
  description:
    "Body text for describing what this product is and why this product is simply a must-buy.",
  details: "Text box for additional details or fine print",
  image:
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1600&q=80",
  alt: "Mushroom composition against bark and pale background",
};

const relatedProducts = [
  {
    title: "Product",
    description: "Description of first product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Two pears on a bright surface",
  },
  {
    title: "Product",
    description: "Description of second product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Radishes scattered on a white surface",
  },
  {
    title: "Product",
    description: "Description of third product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=1200&q=80",
    alt: "Watermelon slices arranged in a graphic composition",
  },
  {
    title: "Product",
    description: "Description of fourth product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    alt: "Mushrooms with soft shadows on a tabletop",
  },
  {
    title: "Product",
    description: "Description of fifth product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
    alt: "Bread and vegetables arranged as a vertical still life",
  },
  {
    title: "Product",
    description: "Description of sixth product",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    alt: "Cherries casting warm shadows on a pale background",
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

            <p className={`mb-10 max-w-[24ch] ${bodyCopyClass} text-[#7f7f7f] max-[900px]:max-w-none`}>
              {featuredProduct.description}
            </p>

            <Button to="/about" className="w-full">
              Add to cart
            </Button>

            <p className={`mt-8 ${bodyCopyClass} text-[#7f7f7f]`}>
              {featuredProduct.details}
            </p>
          </div>
        </div>
      </section>

      <section className="px-0 pt-22 max-[900px]:pt-18 max-[640px]:pt-14">
        <div className={containerClass}>
          <SectionHeader className="mb-12 max-[640px]:mb-8">
            Related products
          </SectionHeader>

          <div className="grid grid-cols-3 gap-x-9 gap-y-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {relatedProducts.map((item, index) => (
              <article key={`${item.title}-${index}`}>
                <ImageWrapper
                  src={item.image}
                  alt={item.alt}
                  className="mb-6 aspect-[1.15/1] w-full max-[640px]:mb-4"
                  imgClassName="rounded-[16px] object-cover"
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
