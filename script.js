const generateBtn = document.querySelector('button');

generateBtn.addEventListener('click', () => {

    let qrImage = document.getElementById('qrImage');

    const userInput = document.querySelector('input').value;

    console.log(userInput);

    QRCode();

    function QRCode(){
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
    }

});