document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail click handling
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });

    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        const accountType = document.getElementById('size').value;
        if (!accountType) {
            alert('Please select an account type');
            return;
        }
        window.location.href = 'https://robinhood.com/signup';
    });
});
