function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)} className="calc-btn">
      {value}
    </button>
  );
}

export default Button;
