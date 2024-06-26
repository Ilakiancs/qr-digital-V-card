function generateQRCode() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please enter both name and email');
        return;
    }

    var cardContent = `Name: ${name}<br>Email: ${email}`;
    document.getElementById('card').innerHTML = cardContent;

    // Update this URL to your Netlify site URL
    var qrCodeData = `https://merry-tartufo-fd5d9e.netlify.app/`;
    
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeData,
        width: 128,
        height: 128
    });
}
