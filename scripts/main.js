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
    },
})
const store = new Swiper(".mapo .img_list", {
    slidesPerView: 1.8, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 20, //슬라이드 사이 간격
    autoplay : {delay:5000},
    navigation:{
        prevEl : '.store .mapo .swiper-button-prev',
        nextEl : '.store .mapo .swiper-button-next',
    },
    pagination: {
        el: '.store .mapo .swiper-pagination',
    },
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    breakpoints: {
        1300: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
})
const cafe = new Swiper(".cafe .img_list", {
    slidesPerView: 3, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 0, //슬라이드 사이 간격
    autoplay : {delay:3000},
    loop : true,
    navigation:{
        prevEl : '.store .mapo .swiper-button-prev',
        nextEl : '.store .mapo .swiper-button-next',
    },
    pagination: {
        el: '.store .mapo .swiper-pagination',
    },
    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetween: 0
        },
    }
})
const event = new Swiper(".event .event_list", {
    slidesPerView: 1, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 0, //슬라이드 사이 간격
    /* autoplay : {delay:5000}, */
    loop : true,
    navigation:{
        prevEl : '.event .event_list .swiper-button-prev',
        nextEl : '.event .event_list .swiper-button-next',
    },
    pagination: {
        el: '.event .event_list .swiper-pagination',
    },
    breakpoints: {
        1200: {
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
    direction : 'vertical',
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
            direction : 'horizontal'
        },
        1100: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        1250: {
            slidesPerView: 2.8,
            spaceBetween: 20
        },
        1380: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        1500: {
            slidesPerView: 3.4,
            spaceBetween: 20
        },
        1700: {
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
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
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