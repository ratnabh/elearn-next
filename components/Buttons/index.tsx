interface ButtonsProps {
  name: string;
  handleClick: () => void;
}
export const Buttons = (props: ButtonsProps) => {
  const { name, handleClick } = props;
  return (
    <div
      className="text-white bg-custom-blue focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer text-center w-full"
      onClick={handleClick}
    >
      {name}
    </div>
  );
};
