interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ style, text, onClick }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="m-4 border-2 pl-5 pr-5 pt-2 pb-2 border-black text-black hover:text-white  border-spacing-2 cursor-pointer transition-all duration-300 hover:bg-black"
    >
      {text}
    </button>
  );
};

export default Button;
