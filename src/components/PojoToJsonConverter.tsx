import React, { useState } from "react";

function parsePojoToJson(code: string): string {
  try {
    const lines = code.split('\n');
    const obj: Record<string, any> = {};
    for (let line of lines) {
      const match = line.trim().match(/^public\s+(\w+)\s+(\w+);/);
      if (match) {
        const [, type, key] = match;
        if (type === "double") obj[key] = 0;
        else if (type === "boolean") obj[key] = false;
        else obj[key] = "";
      }
    }
    return JSON.stringify(obj, null, 2);
  } catch {
    return "Could not parse POJO";
  }
}

const PojoToJsonConverter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => setOutput(parsePojoToJson(input));

  return (
    <section>
      <h2>POJO to JSON Converter</h2>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
        cols={50}
        placeholder='Paste your POJO Java class here'
      />
      <br />
      <button onClick={handleConvert}>Convert</button>
      <pre>{output}</pre>
    </section>
  );
};

export default PojoToJsonConverter;