const shareButton = document.querySelector('.share-icon');
const socialContainer = document.querySelector('.socials-container');

shareButton.addEventListener('click', () => {
    socialContainer.classList.toggle('clicked');
})