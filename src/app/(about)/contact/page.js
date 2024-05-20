import ContactForm from "../../../components/Contact/ContactForm";
import LottieAnimation from "../../../components/Contact/LottieAnimation";
import siteMetadata, { description, title } from "../../../utils/siteMetaData";

export const metaData = {
  title: "Contact Me",
  description: `Email me at: ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <>
      <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row justify-center items-center text-dark">
        <div className="inline-block h-[75vh] w-2/5 border-r-2 border-solid border-dark items-center">
          <LottieAnimation />
        </div>
        <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
          <h2 className="font-bold capitalize text-4xl">
            <ContactForm />
          </h2>
        </div>
      </section>
    </>
  );
}
