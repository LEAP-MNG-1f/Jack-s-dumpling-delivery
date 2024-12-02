type CategoryButtonType = {
  categoryName?: string;
  focus?: string;
  buttonName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const CategoryButton = ({
  categoryName = "Default",
  focus,
  buttonName,
  onClick,
  children,
}: CategoryButtonType) => {
  const isFocused = focus === buttonName;

  return (
    <div
      onClick={onClick}
      className={`group border border-[#D6D8DB] hover:border-green-600 duration-300 w-[160px] py-2 rounded-lg flex justify-center items-center cursor-pointer ${
        isFocused ? "bg-green-600 text-white" : "bg-white text-black"
      }`}
    >
      <p className="font-Inter font-medium text-lg tracking-[-0.396px]">
        {children || categoryName}
      </p>
    </div>
  );
};
