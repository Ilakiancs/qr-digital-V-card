function generateQRCode() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please enter both name and email');
        return;
    }

    // Construct the URL with name and email parameters
    var qrCodeData = `https://merry-tartufo-fd5d9e.netlify.app/card.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

    // Generate QR Code using QRCode library
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeData,
        width: 128,
        height: 128
    });
}
