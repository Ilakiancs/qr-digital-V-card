function generateQRCode() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please enter both name and email');
        return;
    }

    // Update this URL to your actual Netlify site URL
    var qrCodeData = `https://merry-tartufo-fd5d9e.netlify.app/card.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeData,
        width: 128,
        height: 128
    });
}
