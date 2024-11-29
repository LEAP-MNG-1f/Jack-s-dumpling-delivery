type HeaderButtonType = {
  buttonName: string;
  pathname?: string;
  path?: string;
  userId?: string;
};

export const HeaderButton = (props: HeaderButtonType) => {
  return (
    <>
      <p
        className={`px-4 py-2 hover:border-green-600 font-bold text-md leading-4 tracking-[-0.2px] ${
          props.pathname === props.path ? "text-green-600" : "text-black"
        }`}
      >
        {props.buttonName}
      </p>
    </>
  );
};
