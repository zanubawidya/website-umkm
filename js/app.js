"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
 
  { nama: "Kopi Susu Gula Aren", kategori: "Minuman", harga: 25000, stok: 12, deskripsi: "Kopi lokal dengan cita rasa khas.", unggulan: true },
  { nama: "Roti Bakar", kategori: "Makanan", harga: 22000, stok: 4, deskripsi: "Roti bakar hangat yang gurih.", unggulan: false },
  { nama: "Kentang Goreng Renyah", kategori: "Camilan", harga: 18000, stok: 0, deskripsi: "Kentang goreng hangat dan renyah.", unggulan: false },
  { nama: "Croissant Butter", kategori: "Pastry", harga: 24000, stok: 15, deskripsi: "Pastry renyah dengan aroma mentega.", unggulan: false },
];

console.table(produkUmkm);

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

console.log(formatRupiah(produkUmkm[0].harga));

function statusStok(stok) {
  if (stok <= 0) {
    return { label: "Habis", className: "warning" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}
  
console.log(statusStok(0));
console.log(statusStok(3));
console.log(statusStok(12));

function labelKategori(kategori) {
  switch (kategori) {
    case "Kopi":
      return "Produk kopi pilihan";
    case "Bundling":
      return "Paket hemat";
    default:
      return "Produk UMKM";
  }
}
function buatKartuProduk(produk) {
  const status = statusStok(produk.stok);

  return `
    <article class="product-card" style="margin: 0; display: flex; flex-direction: column; border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px; background: #fff;">
      <span class="product-badge">${produk.kategori}</span>
      <h3>${produk.nama}</h3>
      <p>${produk.deskripsi}</p>
      <p class="price" style="margin-top: auto;">${formatRupiah(produk.harga)}</p>
      <span class="stock-badge ${status.className}" style="margin-top: 0.5rem; font-weight: bold;">Status: ${status.label} (Stok: ${produk.stok})</span>
    </article>
  `;
}

produkUmkm.forEach((produk) => {
  console.log("Debug produk:", produk.nama, "stok:", produk.stok);
});

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");
  const unggulan = document.querySelector("#produk-unggulan");

  if (!grid || !ringkasan || !unggulan) {
    console.warn("Target produk render belum lengkap.");
    return;
  }

  const produkTersedia = produkUmkm.filter((produk) => produk.stok > 0);
  const produkUnggulan = produkUmkm.find((produk) => produk.unggulan === true);
  const markupProduk = produkTersedia.map(buatKartuProduk).join("");

  grid.innerHTML = markupProduk;
  ringkasan.textContent = `${produkTersedia.length} produk tersedia dari ${produkUmkm.length} data.`;
  unggulan.textContent = produkUnggulan
    ? `Produk unggulan: ${produkUnggulan.nama}`
    : "Belum ada produk unggulan.";

  console.table(produkUmkm);
}

document.addEventListener("DOMContentLoaded", renderProduk);