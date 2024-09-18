/* full swiper 설정 */
const mainS = new Swiper(".main", {
    direction : 'vertical',
    mousewheel : true
})/* 
const bestS = new Swiper('.best_item', {
    autoplay : {delay:1000},
    loop : true
}) */
/* header 복제 */
// 1. header 복제
// 2. 복제대상을 변수 저장
// 3. m_nav_wrap 위 변수 붙여넣기
const hd = document.querySelector('header')
const hd_copy = document.querySelector('.swiper-slide .hd_copy')
const hdClone = hd.cloneNode(true)
//복제대상.cloneNode() //괄호안 true 자식, 자손 추가 복제
console.log(hd, hd_copy, hdClone)
//복제 header 붙여넣기
hd_copy.appendChild(hdClone)