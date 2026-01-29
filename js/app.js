// alert("hello javascript")
const bgWrap = document.querySelectorAll('.bg-wrap > div')
const body = document.querySelector('body')
const header = document.querySelector('header')
const upBtn = document.querySelector('.up-btn')
const mobNavBtn = document.querySelector('.mob-nav-btn')
// 복수 선택형일때 사용
const navList = document.querySelectorAll('.nav-list li')


// sec-1 슬라이드 스크립트
var galleryswiper = new Swiper(".gallery", {
    pagination: {
        el: ".gallery .swiper-pagination",
    },
    navigation: {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev",
    },
    // 반복허용
    loop: true,
    // 자동움직임
    // autoplay:true,
});
var swiper = new Swiper(".sec-3-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    on: {
        activeIndexChange: function () {
            const i = this.realIndex
            console.log(`현재 index : ${i}`)
            bgWrap.forEach((bg) => {
                bg.classList.remove("active")
            })
            bgWrap[i].classList.add("active");
        }
    }
});
// 매개변수, 순번
navList.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        //부드럽게 이동 윗줄의 ()안에 e도 들어가야함, a태그로인해 페이지가움직이는걸 막음
        e.preventDefault()
        console.log(document.querySelector(`#sec-${i + 1}`))
        document.querySelector(`#sec-${i + 1}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// classList.toggle()
mobNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('mob-nav-open')
})


// console.log(fixedArrow)

window.addEventListener('scroll', () => {

    if (window.scrollY >= 10) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }
})


upBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// menu클래스가 아니라 ul의 li값을 가져와야함
const menuList = document.querySelectorAll(".sec-5-menu li");
const contentList = document.querySelectorAll(".content");

let i = 0;
init(i);
function init(x) {
    menuList[x].classList.add("active");
    contentList[x].classList.add("on");
}
function rest() {
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove("active");
        contentList[i].classList.remove("on");
    }
}
menuList.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(menu, index);
        rest();
        init(index);
    });
});