import React  from "react";
import { useState } from "react";
import "./index.css";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function handleA(event) {
    setA(event.target.value);
  }

  function handleB(event) {
    setB(event.target.value);
  }
  
  function handleComputer(){
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setError(true);
      setResult("A and B shall be numbers");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input  value={a} onChange={handleA} />

      <label>B =</label>
      <input  value={b} onChange={handleB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled 
        value={result}
        className={error ? "error" : ""}/>
      <button onClick={handleComputer}>Compute</button>
    </main>
  );
}

export default App;

