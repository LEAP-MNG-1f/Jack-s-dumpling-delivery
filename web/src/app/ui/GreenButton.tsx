type greenButtonType = {
  buttonName?: string;
};

export const GreenButton = (props: greenButtonType) => {
  return (
    <div className="bg-green-500 text-white p-4 rounded-xl">
      {props.buttonName}
    </div>
  );
};
