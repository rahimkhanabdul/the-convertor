import React, { useState } from "react";

function generatePojoFromJson(json: string): string {
  try {
    const data = JSON.parse(json);
    if (typeof data !== "object" || data === null || Array.isArray(data)) {
      return "Input must be a JSON object.";
    }
    let classStr = "public class GeneratedClass {\n";
    Object.entries(data).forEach(([key, value]) => {
      let type = "String";
      if (typeof value === "number") type = "double";
      else if (typeof value === "boolean") type = "boolean";
      classStr += `    public ${type} ${key};\n`;
    });
    classStr += "}";
    return classStr;
  } catch {
    return "Invalid JSON";
  }
}

const JsonToPojoConverter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => setOutput(generatePojoFromJson(input));

  return (
    <section>
      <h2>JSON to POJO Converter</h2>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
        cols={50}
        placeholder='Paste your JSON here'
      />
      <br />
      <button onClick={handleConvert}>Convert</button>
      <pre>{output}</pre>
    </section>
  );
};

export default JsonToPojoConverter;