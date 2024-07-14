import './App.css';
import WindowResizeTest from "./pages/WindowResizeTest.tsx";
import ClickTest from "./pages/ClickTest.tsx";
import FileDrop from "./pages/FileDrop.tsx";

function App() {
  return (
    <div className="App">
        <WindowResizeTest/>
        <ClickTest/>
        <FileDrop/>
    </div>
  );
}

export default App;
