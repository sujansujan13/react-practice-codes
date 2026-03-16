import Button from "./components/Button";
import ButtonMod from "./components/button/ButtonMod";
import Header from "./components/Header";
import HeaderMod from "./components/header/HeaderMod";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <div>
        <HeaderMod />
        <ButtonMod />
      </div>
    </div>
  );
};

export default App;
