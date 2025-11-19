import "./App.css";

import { TEMPLATE_SECTIONS } from "./constants/template_sections";
import { TemplateColumn } from "./components/Template/TemplateColumn";

function App() {
  return (
    <div className="app">
      <div className="template">
        <header className="template-header">
          <h1 className="template-title">V8 Template</h1>
        </header>

        <main className="template-body">
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
