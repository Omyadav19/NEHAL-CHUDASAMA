/**
 * CONTACT FORM
 * Validation, accessible errors, success state.
 */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');

  function validate(field) {
    const val = field.value.trim();
    const required = field.hasAttribute('required');
    const type = field.type;

    if (required && !val) return 'This field is required.';
    if (type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      return 'Please enter a valid email address.';
    }
    return '';
  }

  function showError(field, msg) {
    field.classList.toggle('error', !!msg);
    const errEl = document.getElementById(`${field.id}-error`);
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.toggle('visible', !!msg);
    }
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    field.setAttribute('aria-describedby', msg ? `${field.id}-error` : '');
  }

  // Real-time validation
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => showError(field, validate(field)));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) showError(field, validate(field));
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
      const err = validate(field);
      showError(field, err);
      if (err) valid = false;
    });

    if (valid) {
      form.style.display = 'none';
      if (success) success.classList.add('visible');
    }
  });
}
