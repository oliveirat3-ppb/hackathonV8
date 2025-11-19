import { useState } from "react";
import "./App.css";

import { TEMPLATE_SECTIONS } from "./constants/template_sections";
import { TemplateColumn } from "./components/Template/TemplateColumn";

function App() {
  const [projectName, setProjectName] = useState("");

  const handleGenerate = () => {
    console.log("Generate template for:", projectName);
  };

  return (
    <div className="app">
      <div className="template">
        <header className="template-header">
          <h1 className="template-title">V8 Template</h1>
        </header>

        <main className="template-body">
          <section className="template-project-header">
            <div className="project-name-wrapper">
              <label className="project-name-label" htmlFor="project-name-input">
                Project Name
              </label>

              <div className="project-name-row">
                <input
                  id="project-name-input"
                  type="text"
                  className="project-name-input"
                  value={projectName}
                  onChange={event => setProjectName(event.target.value)}
                />

                <button
                  type="button"
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>
            </div>
          </section>

          {TEMPLATE_SECTIONS.map(section => (
            <TemplateColumn
              key={section.id}
              title={section.title}
              items={section.items}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
