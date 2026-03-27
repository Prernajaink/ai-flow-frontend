import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./InputNode";
import ResultNode from "./ResultNode";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

const FlowCanvas = ({ input, setInput, result, loading }) => {
  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 50, y: 150 },
      data: { input, setInput },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 450, y: 150 },
      data: { result, loading },
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow 
        nodes={nodes} 
        nodeTypes={nodeTypes}
      >
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;