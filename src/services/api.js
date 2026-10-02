const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
export async function getContent(name) {
  const response = await fetch(`${API}/${name}/`);
  if (!response.ok) throw new Error("API unavailable");
  return response.json();
}
export async function sendContact(payload) {
  const response = await fetch(`${API}/contacts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Unable to send message");
  return response.json();
}
