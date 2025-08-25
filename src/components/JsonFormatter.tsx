import React, { useState } from "react";

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  };

  return (
    <section>
      <h2>JSON Formatter</h2>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
        cols={50}
        placeholder='Paste JSON here'
      />
      <br />
      <button onClick={handleFormat}>Format</button>
      <pre>{output}</pre>
    </section>
  );
};

export default JsonFormatter;