import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setstep] = useState(1);
  const [test, settest] = useState({ name: "Saurabh" });

  function handlePrevious() {
    if (step > 1) {
      setstep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setstep(step + 1);

      //Bad PRActice
      //test.name = "Gaurav";
      //  settest({ name: "Fred" });
    }
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
        {`${test.name}`}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
