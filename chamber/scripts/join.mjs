// join.mjs
export function setupModals() {
  document.querySelectorAll('.see-benefits').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.showModal();
    });
  });

  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.close();
    });
  });
}

export function setTimestamp() {
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }
}
