import "./index.css";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login
          loginIntro={"See your growth and get consulting support"}
          onFormSwitch={toggleForm}
        />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
