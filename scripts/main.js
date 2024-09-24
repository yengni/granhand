const shop = new Swiper(".sub_swiper_cont", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay : {delay:5000},
    loop: true,
    navigation:{
        prevEl : '.perfume .tablet_sub .swiper-button-prev',
        nextEl : '.perfume .tablet_sub .swiper-button-next',
    },
    pagination: {
        el: '.perfume .tablet_sub .swiper-pagination',
        clickable : true
    },
})
const store = new Swiper(".mapo .img_list", {
    slidesPerView: 1, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 0, //슬라이드 사이 간격
    autoplay : {delay:5000},
    navigation:{
        prevEl : '.store .mapo .swiper-button-prev',
        nextEl : '.store .mapo .swiper-button-next',
    },
    pagination: {
        el: '.store .mapo .swiper-pagination',
        clickable : true
    },
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    breakpoints: {
        900: {
            slidesPerView: 1.2,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 1.4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        1300: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        1600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
})
const cafe = new Swiper(".cafe .img_list", {
    slidesPerView: 2, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 0, //슬라이드 사이 간격
    autoplay : {delay:3000},
    loop : true,
    pagination: {
        el: '.cafe .seogyo .swiper-pagination',
        clickable : true
    },
    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 0
        },
    }
})
const event = new Swiper(".event .event_list", {
    slidesPerView: 1, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 0, //슬라이드 사이 간격
    autoplay : {delay:5000},
    loop : true,
    navigation:{
        prevEl : '.event .event_list .swiper-button-prev',
        nextEl : '.event .event_list .swiper-button-next',
    },
    pagination: {
        el: '.event .event_list .swiper-pagination',
        clickable : true
    },
    breakpoints: {
        1100: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 0
        },
    }
})
const picture = new Swiper(".pic_list", {
    slidesPerView: 1.6,
    spaceBetween: 20,
    navigation:{
        prevEl : '.picture .container .swiper-button-prev',
        nextEl : '.picture .container .swiper-button-next',
    },
    breakpoints: {
        400: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        1100: {
            slidesPerView: 2.6,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2.8,
            spaceBetween: 20
        },
        1300: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        1500: {
            slidesPerView: 3.4,
            spaceBetween: 20
        },
        1680: {
            slidesPerView: 3.6,
            spaceBetween: 20
        },
        1850: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
})
const journal = new Swiper(".journal_list", {
    slidesPerView: 1.8,
    spaceBetween: 20,
    navigation:{
        prevEl : '.journal_footer .journal_list .swiper-button-prev',
        nextEl : 'journal_footer .journal_list .swiper-button-next',
    },
    breakpoints: {
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 3.6,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4.6,
            spaceBetween: 20
        },
        1750: {
            slidesPerView: 5,
            spaceBetween: 20
        },
    }
})