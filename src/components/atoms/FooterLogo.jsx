import mLogo from "/public/m-logo.svg";

const FooterLogo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <img
        src={mLogo}
        className="w-10 md:w-12"
        width={47.18}
        alt="marico-logo"
      />
      <p
        className={`text-4xl font-extrabold leading-[56px] text-white md:text-[42px]`}
      >
        Marico
      </p>
    </div>
  );
};

export default FooterLogo;
