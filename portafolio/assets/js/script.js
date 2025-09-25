document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('mainNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const contact = (formData.get('contact') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

             const text = `Hola Luis, soy ${name}. ${message} | Mi contacto: ${contact}`;
       const phone = '573112242581'; // Número de Luis Arturo (Colombia)

       const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

       // Intenta abrir WhatsApp; si falla, abre el mailto
       const opened = window.open(whatsappUrl, '_blank', 'noopener');
       if (!opened) {
         const mail = 'becerraflorezluisarturo@gmail.com';
         const subject = 'Consulta auto';
         const body = text;
         window.location.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
       }
    });
  }
});


