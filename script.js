function generateQRCode() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please enter both name and email');
        return;
    }

    var cardContent = `Name: ${name}<br>Email: ${email}`;
    document.getElementById('card').innerHTML = cardContent;

    var qrCodeData = `http://example.com/card.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeData,
        width: 128,
        height: 128
    });
}

