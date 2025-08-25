import React, { useState } from "react";
import xmlFormatter from "xml-formatter";

const XmlFormatter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleFormat = () => {
    try {
      setOutput(xmlFormatter(input));
    } catch {
      setOutput("Invalid XML");
    }
  };

  return (
    <section>
      <h2>XML Formatter</h2>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
        cols={50}
        placeholder='Paste XML here'
      />
      <br />
      <button onClick={handleFormat}>Format</button>
      <pre>{output}</pre>
    </section>
  );
};

export default XmlFormatter;