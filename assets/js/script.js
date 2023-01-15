$(function () {

    $('.slider__container').slick({
        dots: true,
        vertical: true,
        appendArrows: $('.slider__control'),
        appendDots: $('.slider__control'),
        prevArrow: `<div class="arrow__container arrow__container-prev"><button type="button" class="slick-prev slick__arrow"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.22229 3.75729L2 8.97958L0.727421 7.707L8.293 0.141421L15.8586 7.707L14.586 8.97958L9.36371 3.75729L9.193 3.58658V3.828L9.193 18.314H7.393L7.393 3.828V3.58658L7.22229 3.75729Z" fill="#00A39A" stroke="#00A39A" stroke-width="0.2"/>
        </svg>
        </button></div>`,
        nextArrow: `<div class="arrow__container arrow__container-next"><button type="button" class="slick-next slick__arrow"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.22229 14.6568L2 9.43448L0.727421 10.7071L8.293 18.2726L15.8586 10.7071L14.586 9.43448L9.36371 14.6568L9.193 14.8275V14.5861L9.193 0.100063H7.393L7.393 14.5861V14.8275L7.22229 14.6568Z" fill="#00A39A" stroke="#00A39A" stroke-width="0.2"/>
        </svg></button></div>`,
    });

});