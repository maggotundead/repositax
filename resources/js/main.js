new Swiper('#video-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    // spaceBetween: 30,
    // noSwiping: true,
    // autoplay: {
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '#prev-video-btn',
        nextEl: '#next-video-btn',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // breakpoints: {
    //     0: {
    //         slidesPerView: 1
    //     },
    //     //$tablet-width
    //     1200: {
    //         slidesPerView: 'auto',
    //     },
    // }
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

const videos = document.querySelectorAll('.video-item');
videos.forEach( video => {
    const videoThumb = video.querySelector('img');
    const videoFrame = video.querySelector('iframe');
    const videoFrameUrl = videoFrame.getAttribute('data-src');

    videoThumb.addEventListener('click', () => {
        video.classList.add('is-frame-active');
        videoFrame.src = videoFrameUrl
    });
});



// document.querySelector('.burger-btn').addEventListener('click', () => {
//     document.querySelector('body').classList.toggle('mobile-menu-open');
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// sticky header
// window.onscroll = function() {toggleHeader()};
// const header = document.querySelector('header');
// window.pageYOffset && header.classList.add('sticky')
// const toggleHeader = () => {
//     window.pageYOffset > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
// }


// modal
const contactModal = document.getElementById('contact-modal');
document.querySelectorAll('.contact-btn').forEach( btn => btn.addEventListener( 'click', () => contactModal.classList.add('active') ) );
document.querySelectorAll('.modal-close').forEach( btn => btn.addEventListener( 'click', () => document.querySelectorAll('.modal').forEach( modal => modal.classList.remove('active') ) ) );
document.querySelectorAll('.modal-overlay').forEach( overlay => overlay.addEventListener( 'click', () => overlay.closest('.modal').classList.remove('active') ) ) ;
