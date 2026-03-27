import React from "react";

const ResultNode = ({ data }) => {
  return (
    <div className="card" style={{ minWidth: 280, padding: 0 }}>
      <header style={{ 
        background: '#ecfdf5', 
        padding: '10px 16px', 
        borderBottom: '1px solid var(--border-color)',
        fontSize: '12px',
        fontWeight: 700,
        color: '#059669',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        Result Node
      </header>
      <div style={{ padding: 16 }}>
        <div style={{
          minHeight: 120,
          background: '#f8fafc',
          border: '1px solid var(--border-color)',
          borderRadius: 8,
          color: data.result ? 'var(--text-main)' : 'var(--text-muted)',
          padding: 16,
          fontSize: '14px',
          fontFamily: 'inherit',
          lineHeight: '1.6',
          overflowY: 'auto',
          maxHeight: 400
        }}>
          {data.loading ? "Generating response..." : data.result || "AI output will appear here after running the flow."}
        </div>
      </div>
    </div>
  );
};

export default ResultNode;