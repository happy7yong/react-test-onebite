import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Main from "./Components/Main.jsx";
import Button from "./Components/Button.jsx";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
