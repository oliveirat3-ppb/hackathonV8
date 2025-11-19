import "./App.css";

import { TEMPLATE_SECTIONS } from "./constants/template_sections";

function CardRow({ label, version }) {
  return (
    <div className="card-row">
      <span className="card-row-label">
        {label} ({version})
      </span>
      <input type="checkbox" className="card-checkbox" />
    </div>
  );
}

function TemplateColumn({ title, items }) {
  return (
    <section className="template-column">
      <h2 className="column-title">{title}</h2>
      <div className="card">
        <div className="card-inner">
          {items.map((item) => (
            <CardRow
              key={item.id}
              label={item.label}
              version={item.version}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <div className="template">
        <header className="template-header">
          <h1 className="template-title">V8 Template</h1>
        </header>

        <main className="template-body">
          {TEMPLATE_SECTIONS.map((section) => (
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
