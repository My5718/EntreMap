export async function isLoggedIn() {
  const response = await fetch("/api/auth/verify", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  });
  const data = await response.json();
  return data.success;
}
