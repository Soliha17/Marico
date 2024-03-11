const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src="/public/m-logo.svg" width={45.12} alt="marico-logo" />
      <p
        className={`text-[37px] font-extrabold leading-[56px] text-white hidden sm:block`}
      >
        Marico
      </p>
    </div>
  );
};

export default HeaderLogo;
