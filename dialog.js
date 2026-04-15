const openBtn = document.getElementById('open-dialog-btn');
const modal = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');
let previousFocusedElement;

function showModal() {
  previousFocusedElement = document.activeElement; // Зберігаємо тригер
  modal.hidden = false;
  modal.focus(); // Фокусуємо сам діалог або перший input
  
  document.addEventListener('keydown', handleKeyDown);
  // Додаємо клас для блокування прокрутки фону
  document.body.classList.add('modal-open');
}

function hideModal() {
  modal.hidden = true;
  document.removeEventListener('keydown', handleKeyDown);
  document.body.classList.remove('modal-open');
  
  if (previousFocusedElement) {
    previousFocusedElement.focus(); // Повертаємо фокус 
  }
}

function handleKeyDown(e) {
  const isTabPressed = e.key === 'Tab';
  const isEscPressed = e.key === 'Escape';

  if (isEscPressed) {
    hideModal();
    return;
  }

  if (!isTabPressed) return;

  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (e.shiftKey) { // Поведінка Shift + Tab
    if (document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  } else { // Поведінка Tab
    if (document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  }
}