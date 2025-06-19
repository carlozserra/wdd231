
document.querySelector('form').addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value;
  localStorage.setItem('userName', name);
});
