import './App.css';
import NumberState from "./pages/NumberState.tsx";
import InputTest from "./pages/InputTest.tsx";
import ShowHideModal from "./pages/ShowHideModal.tsx";
import RadioInputTest from "./pages/RadioInputTest.tsx";

function App() {
  return (
    <div className="App">
      <NumberState/>
      <InputTest/>
        <ShowHideModal/>
        <RadioInputTest/>
    </div>
  );
}

export default App;
