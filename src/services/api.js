const BASE_URL = "https://ai-flow-backend-zpb6.onrender.com/api";

export const askAI = async (prompt) => {
  const res = await fetch(`${BASE_URL}/ask-ai`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  return res.json();
};

export const saveFlow = async (prompt, response) => {
  await fetch("https://ai-flow-backend-zpb6.onrender.com/api/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt, response })
  });
};
