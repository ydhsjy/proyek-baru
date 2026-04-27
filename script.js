const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const nama = formData.get('nama');

  formMessage.textContent = `Terima kasih, ${nama}. Pesan Anda sudah kami terima.`;
  contactForm.reset();
});
