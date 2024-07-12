import './App.css';
import Clock from "./pages/Clock.tsx";
import {useClock} from "./hooks";

function App() {
    const today = useClock()
  return (
    <div className="App">
      {/*<Clock today={todayRef.current}/>*/}
        <Clock today={today}/>
    </div>
  );
}

export default App;
