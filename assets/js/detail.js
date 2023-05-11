function netAlert() {
  alert('Item berhasil ditambahkan ke keranjang');
}

function beliAlert() {
  document.getElementById("beli").addEventListener("click", function () {
    var result = confirm("Lanjutkan Chekcout?");
    if (result) {
      // Lanjut ke halaman berikutnya
      window.location.href = "checkout.html";
    } else {
      window.location.href = "detailproducts.html";
    }
  });
}

function keranjangbeliAlert() {
  document.getElementById("checkout").addEventListener("click", function () {
    var result = confirm("Lanjutkan Chekcout?");
    if (result) {
      // Lanjut ke halaman berikutnya
      window.location.href = "checkout.html";
    } else {
      window.location.href = "keranjang.html";
    }
  });
}

function purchase() {
  document.getElementById("purchase").addEventListener("click", function () {
    var result = confirm("Konfirmasi Pembayaran");
    if (result) {
      // Lanjut ke halaman berikutnya
      window.location.href = "sukses.html";
    } else {
      window.location.href = "checkout.html";
    }
  });
}