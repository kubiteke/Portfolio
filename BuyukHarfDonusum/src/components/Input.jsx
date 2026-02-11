import { useState } from "react"; 

export default function Input() {
  const [input, setInput] = useState("");

  const inputuDeğiştir = (evt) => {
 
    setInput(evt.target.value.toUpperCase());
  };
  const reset = () => {
    
    setInput("");
  };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: input.length > 10 ? "crimson" : "blue" /* ADIM 2 */,
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div data-testid="output" style={stil}>
        {input}
      </div>

      <div>
        <input
          data-testid="input"
          type="text"
          onChange={inputuDeğiştir}
          value={input}
        />
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
