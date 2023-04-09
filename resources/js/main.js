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

const ctaVideo = document.querySelector('.cta-elem');
if (ctaVideo) {
    const ctaVideoThumb = ctaVideo.querySelector('img');
    const ctaVideoFrame = ctaVideo.querySelector('iframe');
    const ctaVideoFrameUrl = ctaVideoFrame.getAttribute('data-src');

    ctaVideoThumb.addEventListener('click', () => {
        ctaVideo.classList.add('is-frame-active');
        ctaVideoFrame.src = ctaVideoFrameUrl;
    });
}

const thumbVideos = document.querySelectorAll('.thumb-elem');
const contactModal = document.getElementById('contact-modal');

const videoModal = document.getElementById('video-modal');
const videoModalFrame = videoModal.querySelector('iframe');

if (thumbVideos) {
    thumbVideos.forEach( video => {
        const videoThumb = video.querySelector('img');
        const videoUrl = videoThumb.getAttribute('data-video-src');

        videoThumb.addEventListener('click', () => {
            console.log(videoUrl);
            videoModal.classList.add('active');
            videoModalFrame.src = videoUrl;
        });
    });
}

document.querySelectorAll('.contact-btn').forEach( btn => btn.addEventListener( 'click', () => contactModal.classList.add('active') ) );
document.querySelectorAll('.modal-close').forEach( btn => {
    btn.addEventListener( 'click', () => {
        document.querySelectorAll('.modal').forEach( modal => {
            modal.classList.remove('active');
            if (videoModalFrame.src) {
                videoModalFrame.src = '';
            }
        });
    })
});
document.querySelectorAll('.modal-overlay').forEach( overlay => {
    overlay.addEventListener( 'click', () => {
        overlay.closest('.modal').classList.remove('active');
        if (videoModalFrame.src) {
            videoModalFrame.src = '';
        }
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


