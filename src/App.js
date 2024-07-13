import './App.css';
import HighOrderCallback from "./pages/HighOrderCallback.tsx";
import Callback from "./pages/Callback.tsx";
import Memo from "./pages/Memo.tsx";
import UseOrCreateTest from "./pages/UseOrCreateTest.tsx";

function App() {
  return (
    <div className="App">
        <HighOrderCallback/>
        <Callback/>
        <Memo/>
        {/*<UseOrCreateTest/>*/}
    </div>
  );
}

export default App;
