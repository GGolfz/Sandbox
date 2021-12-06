import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Sandpack, getThemeStyleSheet } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

function App() {
  const [template, setTemplate] = useState("react");

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:'2.5rem'}}>GGolfz's Sandbox</h1>
        <div style={{display:'flex', fontSize:'1.25rem'}}>
          <div style={{padding:'1rem',margin:'.25rem'}} onClick={() => setTemplate("vanilla")}>Vanila</div>
          <div style={{padding:'1rem',margin:'.25rem'}} onClick={() => setTemplate("react")}>React</div>
          <div style={{padding:'1rem',margin:'.25rem'}} onClick={() => setTemplate("react-ts")}>React TypeScript</div>
          <div style={{padding:'1rem',margin:'.25rem'}} onClick={() => setTemplate("vue")}>VueJS</div>
          <div style={{padding:'1rem',margin:'.25rem'}} onClick={() => setTemplate("vue3")}>Vue3</div>
        </div>
        <div style={{ width: "100vw" }}>
          <Sandpack
            template={template}
            theme="sandpack-dark"
            options= {{
              editorHeight: "80vh",
              showInlineErrors: true,
              showNavigator: true,
              showEditor: true,
              showLineNumbers: true,
              showTabs: true,
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
