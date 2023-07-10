const shareButton = document.querySelector('.share-button-1');
const socialContainer = document.querySelector('.socials-container');
const secondShareButton = document.querySelector('.share-button-2');

shareButton.addEventListener('click', () => {
    socialContainer.classList.toggle('clicked');
})



secondShareButton.addEventListener('click', () => {
    socialContainer.classList.remove('clicked');
})