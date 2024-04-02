const shareButton = document.querySelector('.share-button');
const floatingTab = document.querySelector('.floating-button');
const floatingTabSmallScreen = document.querySelector('.floating-button-small')
const shareButtonSmall = document.querySelector('.share-button-small')

shareButton.addEventListener('click', () => {
    floatingTab.classList.toggle('close')

    floatingTabSmallScreen.classList.toggle('open')
})

shareButtonSmall.addEventListener('click', () => {
    floatingTabSmallScreen.classList.toggle('open')
})