const MarkedText = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-[9px]">
      <div className="green-circle flex h-[28.6px] w-[28.6px] items-center justify-center rounded-full bg-no-repeat">
        <img src="/src/assets/green-dot.svg" alt="green dot" width={17.1} />
      </div>
      <p className="text-center font-extrabold text-white md:text-2xl">1000+</p>
      <p className="text-center font-normal text-gray-light md:text-2xl">
        creators have already started
      </p>
    </div>
  );
};

export default MarkedText;
