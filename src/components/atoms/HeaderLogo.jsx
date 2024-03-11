import mLogo from "/public/m-logo.svg";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={mLogo} width={45.12} alt="marico-logo" />
      <p
        className={`hidden text-[37px] font-extrabold leading-[56px] text-white sm:block`}
      >
        Marico
      </p>
    </div>
  );
};

export default HeaderLogo;
