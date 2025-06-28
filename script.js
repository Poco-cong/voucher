let voucherValue = "";

function submitVoucher() {
  voucherValue = document.getElementById("voucherCode").value.trim();
  if (!voucherValue) {
    alert("Masukkan kode voucher dulu!");
    return;
  }
  document.getElementById("modalConfirm").style.display = "flex";
}

function cancelModal() {
  document.getElementById("modalConfirm").style.display = "none";
}

function confirmVoucher() {
  document.getElementById("modalConfirm").style.display = "none";
  document.getElementById("voucherDisplay").style.display = "block";
  document.getElementById("displayCode").innerText = voucherValue;

  let qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  new QRCode(qrcodeContainer, {
    text: voucherValue,
    width: 200,
    height: 200,
  });
}
