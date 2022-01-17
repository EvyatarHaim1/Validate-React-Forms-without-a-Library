import "./App.css";
import React, { useRef } from 'react';
import FormInput from "./components/FormInput";

function App() {
  // const [username, setUsername] = useState("");
  const usernameRef = useRef();

  const handleSubmit = () => { }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput ref={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Phone Number" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
