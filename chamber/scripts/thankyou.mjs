export function displayUserInfo() {
  const params = new URLSearchParams(window.location.search);

  const map = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    phone: "phone",
    orgName: "orgName",
    timestamp: "timestamp"
  };

  for (const [key, id] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) {
      let value = params.get(key);

      if (key === "timestamp" && value) {
        const date = new Date(value);
        value = date.toLocaleDateString() + " " + date.toLocaleTimeString();
      }

      el.textContent = value || "N/A";
    }
  }
}
