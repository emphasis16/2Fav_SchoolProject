function netAlert() {
  alert('Item berhasil ditambahkan ke keranjang');
}

function beliAlert() {
  document.getElementById("beli").addEventListener("click", function () {
    var result = confirm("Konfirmasi Pembayaran Dalam 1 kali Klik?");
    if (result) {
      // Lanjut ke halaman berikutnya
      window.open("checkout.html", "_blank");
    } else {
      window.location.href = "detailproducts.html";
    }
  });
}