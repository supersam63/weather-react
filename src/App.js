import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="p-3 bg-light bg-opacity-10 border my-border-color border-2 rounded-end rounded-start">
          <Weather defaultCity="Los Angeles" />
        </div>
      </div>
    </div>
  );
}

export default App;
