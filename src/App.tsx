import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="template">
        <header className="template-header">
          <h1 className="template-title">V8 Template</h1>
        </header>

        <main className="template-body">
          {/* FE Framework */}
          <section className="template-column">
            <h2 className="column-title">FE Framework</h2>
            <div className="card">
              <div className="card-inner">
                <div className="card-row">
                  <span className="card-row-label">React (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Typescript (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">React Router (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Redux (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">
                    TanStack Query (vX.X.X)
                  </span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">GraphQL (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">
                    React Bootstrap (vX.X.X)
                  </span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Material UI (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Ivory (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Fabric (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
              </div>
            </div>
          </section>

          {/* Package Manager */}
          <section className="template-column">
            <h2 className="column-title">Package Manager</h2>
            <div className="card">
              <div className="card-inner">
                <div className="card-row">
                  <span className="card-row-label">NPM (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
              </div>
            </div>
          </section>

          {/* Build Tool */}
          <section className="template-column">
            <h2 className="column-title">Build Tool</h2>
            <div className="card">
              <div className="card-inner">
                <div className="card-row">
                  <span className="card-row-label">Vite (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Rollup (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
              </div>
            </div>
          </section>

          {/* Extra Checks */}
          <section className="template-column">
            <h2 className="column-title">Extra Checks</h2>
            <div className="card">
              <div className="card-inner">
                <div className="card-row">
                  <span className="card-row-label">ESLint (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Jest (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Vitest (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Playwright (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">Husky (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
                <div className="card-row">
                  <span className="card-row-label">MSW (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
