import MarkedText from "../atoms/MarkedText";
import BtnGroupContact from "./BtnGroupContact";

const Contact = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32">
      <p className="text-center text-lg font-medium text-white md:text-2xl lg:text-4xl lg:leading-[60px]">
        Turn your audience into email and <br /> text message subscribers.
      </p>
      <BtnGroupContact />
      <MarkedText numberSize="md:text-2xl" textSize="md:text-2xl" />
    </div>
  );
};

export default Contact;
