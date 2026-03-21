import Button from "../components/Button.jsx";
import ImageWrapper from "../components/ImageWrapper.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { bodyCopyClass, containerClass } from "../styles/classNames.js";

const profileImage = {
  src: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?cs=srgb&dl=pexels-harsh-raj-gond-1485031.jpg&fm=jpg",
  alt: "Portrait of a woman in soft natural light",
};

const aboutParagraphs = [
  "Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:",
  "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zurich sleepy perfect consectetur.",
];

function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="mb-3 block text-[1rem] font-medium text-black">
      {children}
    </label>
  );
}

function TextInput({ id, placeholder, type = "text" }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-[10px] border border-black/10 bg-white px-5 py-4 text-[1rem] text-black outline-none transition duration-200 placeholder:text-[#8f8f8f] focus:border-black/25 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
    />
  );
}

export default function AboutPage() {
  return (
    <main className="px-0 pt-6 pb-24 max-[640px]:pt-2 max-[640px]:pb-16">
      <section>
        <div className={`${containerClass} grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] max-[900px]:grid-cols-1`}>
          <div className="max-w-[760px]">
            <SectionHeader className="mb-7 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] tracking-[-0.06em] max-[640px]:mb-5">
              About
            </SectionHeader>

            <p className="mb-10 max-w-[30ch] text-[clamp(1.18rem,1.5vw,1.65rem)] leading-[1.5] font-normal text-[#8a8a8a] max-[640px]:max-w-none">
              Subheading for description or instructions
            </p>

            <div className="max-w-[44rem] space-y-10">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[clamp(1.1rem,1.5vw,1.25rem)] leading-[1.55] text-black"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="pt-24 max-[900px]:pt-16 max-[640px]:pt-12">
              <SectionHeader className="mb-10 text-[clamp(2.2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.04em] max-[640px]:mb-8">
                Contact me
              </SectionHeader>

              <form className="max-w-[760px]">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="first-name">First name</FieldLabel>
                    <TextInput id="first-name" placeholder="Jane" />
                  </div>

                  <div>
                    <FieldLabel htmlFor="last-name">Last name</FieldLabel>
                    <TextInput id="last-name" placeholder="Smitherton" />
                  </div>
                </div>

                <div className="mt-6">
                  <FieldLabel htmlFor="email-address">Email address</FieldLabel>
                  <TextInput
                    id="email-address"
                    type="email"
                    placeholder="email@janesfakedomain.net"
                  />
                </div>

                <div className="mt-6">
                  <FieldLabel htmlFor="message">Your message</FieldLabel>
                  <textarea
                    id="message"
                    placeholder="Enter your question or message"
                    rows={7}
                    className="w-full rounded-[10px] border border-black/10 bg-white px-5 py-4 text-[1rem] text-black outline-none transition duration-200 placeholder:text-[#8f8f8f] focus:border-black/25 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
                  />
                </div>

                <Button href="#" className="mt-8 w-full justify-center py-4 text-[1.05rem]">
                  Submit
                </Button>
              </form>
            </section>
          </div>

          <div className="lg:pt-6">
            <ImageWrapper
              src={profileImage.src}
              alt={profileImage.alt}
              className="h-[760px] w-full max-[1100px]:h-[680px] max-[900px]:h-[540px] max-[640px]:h-[360px]"
              imgClassName="rounded-[18px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
