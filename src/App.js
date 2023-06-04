import "./styles.css";
const { Switch, Route } = require("react-router-dom");

const { Home } = require("./pages/Home");
const { Login } = require("./pages/Login");

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
