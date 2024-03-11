import FooterLogo from "../atoms/FooterLogo";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "Sign in", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <div className="mx-auto flex w-[95%] max-w-[1640px] flex-col items-center justify-between gap-6 py-14 md:flex-row lg:pb-20 lg:pt-28">
      <div className="flex flex-col gap-1">
        <FooterLogo />
        <p className="text-2xl font-normal text-gray-light">info@marico.co</p>
      </div>
      <div className="flex gap-6 md:gap-11">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "text-blue hover:underline"
                : "text-gray-light hover:text-blue",
              "cursor-pointer text-xl font-medium leading-[30px] transition-colors",
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
