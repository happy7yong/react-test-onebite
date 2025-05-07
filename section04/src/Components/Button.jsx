const Button = ({ children, text, color = "black" }) => {
  const ButtonClick = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={ButtonClick}
      //onMouseEnter={ButtonClick}
      style={{ color: color }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
