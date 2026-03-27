const BASE_URL = "http://localhost:5000/api";

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
  await fetch("http://localhost:5000/api/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt, response })
  });
};