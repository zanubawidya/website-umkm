// const promoButton = document.querySelector("#promoButton");

// promoButton.addEventListener("click", () => {
//   promoButton.textContent = "Promo: Beli 2 gratis tester!";
//   console.log("Promo Kopi Nusa berhasil ditampilkan.");
// });


const promoButton = document.getElementById("promoButton");
const promoMessage = document.getElementById("promoMessage");

if (promoButton && promoMessage) {
    promoButton.addEventListener("click", function () {
        promoMessage.textContent =
        "Terima kasih sudah mengunjungi Warkop Neng Widya! " +
        "Yuk, nikmati minuman favoritmu hari ini.";

    });
}
