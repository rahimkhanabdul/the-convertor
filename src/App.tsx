import React from "react";
import JsonToPojoConverter from "./components/JsonToPojoConverter";
import PojoToJsonConverter from "./components/PojoToJsonConverter";
import JsonFormatter from "./components/JsonFormatter";
import XmlFormatter from "./components/XmlFormatter";

const App: React.FC = () => (
  <div style={{ padding: 24 }}>
    <h1>JSON/POJO/XML Formatter & Converter</h1>
    <JsonToPojoConverter />
    <PojoToJsonConverter />
    <JsonFormatter />
    <XmlFormatter />
  </div>
);

export default App;