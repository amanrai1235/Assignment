import React, { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  const toggleText = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>Show / Hide Text</h2>

      <button onClick={toggleText}>
        {show ? "Hide Text" : "Show Text"}
      </button>

      {show && <p>I am AMAN KUMAR RAI</p>}
    </div>
  );
}

export default App;