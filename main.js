window.addEventListener('scroll',()=> {

    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
})




var slideImg = document.getElementById("slideImg");

var images = new Array(

    "images/bruuuno.png",
    "./images/aa.jpg",
    "./images/bb.jpg",
    "./images/cc.jpg",

    "./images/ff.jpg",
    "./images/ooo.jpg",
    "./images/ee.jpg",

     "./images/dd.jpg"




);
var len= images.length;
var i =0;

function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()' ,3000);
}














//show/hide faq answer

const faqs =document.querySelectorAll('.faq');

faqs.forEach(faq => {

    faq.addEventListener('click',() =>
    {
        faq.classList.toggle('open');

        // change icon

const icon = faq.querySelector('.faq_icon i');
if(icon.className=='uil uil-plus') {
    icon.className="uil uil-minus";
}else {

    icon.className = "uil uil-plus";

}

    })
})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav menu

const closeNav = () => {
    menu.style.display= "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' ,closeNav)






