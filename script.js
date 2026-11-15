document.addEventListener("DOMContentLoaded", function () {
  // 1. Toggle Menu Mobile (Hamburger)
  const hamburger = document.getElementById("syakila_hamburger");
  const navMenu = document.querySelector(".syakila_menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("syakila_show");
    });
  }

  // 2. Interaksi Form Kontak
  const contactForm = document.getElementById("syakila_form_kontak");
  const statusText = document.getElementById("syakila_form_status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("syakila_input_nama").value.trim();
      const email = document.getElementById("syakila_input_email").value.trim();
      const pesan = document.getElementById("syakila_input_pesan").value.trim();

      if (nama === "" || email === "" || pesan === "") {
        statusText.style.color = "#dc2626";
        statusText.textContent = "Harap lengkapi semua kolom sebelum mengirim pesan.";
        return;
      }

      statusText.style.color = "#16a34a";
      statusText.textContent = `Terima kasih, ${nama}! Pesan Anda telah berhasil terkirim.`;
      contactForm.reset();
    });
  }
});