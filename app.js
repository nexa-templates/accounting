document.querySelectorAll('[data-status]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-status]').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-selected', String(tab === button)); });
  document.querySelectorAll('[data-state]').forEach(row => row.hidden = button.dataset.status !== 'all' && row.dataset.state !== button.dataset.status);
}));
let timer;
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {
  const toast = document.querySelector('.toast'); toast.textContent = 'This is a template preview with sample data. Your accountant can help make it yours.'; toast.hidden = false;
  clearTimeout(timer); timer = setTimeout(() => toast.hidden = true, 3500);
}));
