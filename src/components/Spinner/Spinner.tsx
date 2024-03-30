interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50 }) => {
  return (
    <div
      className="animate-spin"
      style={{
        width: size,
        height: size,
        border: `${size / 10}px solid rgba(0, 0, 0, 0.1)`,
        borderTop: `${size / 10}px solid #3498db`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Spinner;
