import React, { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";
import { askAI, saveFlow } from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const runFlow = async () => {
    if (!input.trim()) return alert("Please enter a prompt");
    setLoading(true);
    try {
      const res = await askAI(input);
      setResult(res.answer);
    } catch (e) {
      alert("AI request failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!result) return alert("Run flow first!");
    try {
      await saveFlow(input, result);
      alert("Flow saved successfully!");
    } catch (e) {
      alert("Could not save flow");
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: 32, letterSpacing: '-0.03em' }}>
            AI Flow App
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            Design and execute functional AI workflows
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-primary" onClick={runFlow} disabled={loading}>
            {loading ? "Processing..." : "Run Flow"}
          </button>
        </div>
      </header>

      <main className="card" style={{ height: 600, width: '100%', position: 'relative' }}>
        <FlowCanvas 
          input={input} 
          setInput={setInput} 
          result={result} 
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;