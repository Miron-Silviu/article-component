'use strict'

// Storing classes inside variables .

const shareBtn = document.querySelector('.share-button');

// Create event for shareButton

shareBtn.addEventListener('click', function(){
    const footerClass = document.querySelector('.footer-share-menu').style.visibility = 'visible';
})

