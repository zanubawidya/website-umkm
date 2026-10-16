const promoButton = document.querySelector("#promoButton");

promoButton.addEventListener("click", () => {
  promoButton.textContent = "Promo: Beli 2 gratis tester!";
  console.log("Promo Kopi Nusa berhasil ditampilkan.");
});

const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  preview.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `Paket: ${data.get("paket")}`,
    `Topik: ${data.get("topik")}`,
    `Pesan: ${data.get("pesan")}`,
  ].join("\n");
});