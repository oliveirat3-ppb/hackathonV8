import './App.css'

function App() {
  return (
    <div className="app">
      <div className="template">
        <header className="template-header">
          <h1 className="template-title">V8 Template</h1>
        </header>

        <main className="template-body">
          {/* Package Manager */}
          <section className="template-column">
            <h2 className="column-title">Package Manager</h2>
            <div className="card">
              <div className="card-inner">
                <div className="card-row">
                  <span className="card-row-label">NPM (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>

                <div className="card-divider" />

                <div className="card-row card-row--muted">
                  <span className="card-row-label">Yarn (vX.X.X)</span>
                  <input type="checkbox" className="card-checkbox" />
                </div>
              </div>
            </div>
          </section>

          {/* FE Framework */}
          <section className="template-column">
            <h2 className="column-title">FE Framework</h2>
            <div className="card" />
          </section>

          {/* Build Tool */}
          <section className="template-column">
            <h2 className="column-title">Build Tool</h2>
            <div className="card" />
          </section>

          {/* Extra Checks */}
          <section className="template-column">
            <h2 className="column-title">Extra Checks</h2>
            <div className="card" />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
