import React from "react";

const InputNode = ({ data }) => {
  return (
    <div className="card" style={{ minWidth: 240, padding: 0 }}>
      <header style={{ 
        background: '#f8fafc', 
        padding: '10px 16px', 
        borderBottom: '1px solid var(--border-color)',
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Input Node
      </header>
      <div style={{ padding: 16 }}>
        <textarea
          style={{
            width: '100%',
            minHeight: 100,
            border: '1px solid var(--border-color)',
            borderRadius: 8,
            padding: 12,
            fontSize: '14px',
            resize: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            background: '#fff',
            color: 'var(--text-main)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
          }}
          placeholder="Type your prompt here..."
          value={data.input}
          onChange={(e) => data.setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputNode;