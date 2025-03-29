liff.init({ liffId: 'YOUR_LIFF_ID' }).then(() => {
    const imageInput = document.getElementById('imageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        const file = imageInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            fetch('YOUR_GAS_WEB_APP_URL', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image sent:', data);
                liff.closeWindow(); // LIFFアプリを閉じる
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
