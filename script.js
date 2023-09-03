const swiper = new Swiper('.swiper-container', {
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
        },
    },
    on: {
        resize: function () {
            showSlide();
        },
    },
});

function showSlide() {
    const windowInnerWidth = window.innerWidth; 
    let slidesLength = swiper.slides; 

    for (let i = 0; i < slidesLength.length; i++) {
        if (windowInnerWidth < 768 || windowInnerWidth > 1020) {
            slidesLength[i].style.width = 240 + 'px';
        } else {
            slidesLength[i].style.width = 224 + 'px';
        }
    }
}
showSlide();



let showBrandsBtn = document.getElementById('showBrands').querySelector('button');
let showBrandsImg = document.getElementById('showBrands').querySelector('img');
let brands = document.querySelector('.brands');

function showBrands(heightBlock, img, text) {
    brands.style.height = heightBlock; 
    showBrandsImg.src = img; 
    showBrandsBtn.textContent = text; 
}


showBrandsBtn.addEventListener('click', function () {
    if (brands.style.height !== '100%') {
        showBrands('100%', 'img/down-arrow.svg', 'Скрыть');
    } else {
        showBrands('160px', 'img/up-arrow.svg', 'Показать все');
    }

});