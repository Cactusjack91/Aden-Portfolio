// function eyeball(){
//   const eye = document.querySelectorAll('.eye');
//   eye.forEach(function(eye){
//     let x = (eye.getBoundingClientRect().left) +  (eye.clientWidth / 2);
//     let y = (eye.getBoundingClientRect().top) +  (eye.clientHeight / 2);

//     let radian = Math.atan2(event.pageX - x, event.pageY - y);
//   });
// }

// script for after delay
// var link = document.getElementById('link');

// link.addEventListener('click', ()=>{
//     console.log("url clicked...")

//     setTimeout(() =>{
//         window.location.href = "C:\Users\Chan Chun Meng\Downloads\A\ADC-XXX\about.html";
//         console.log("timeout executed...")
//     }, 4000);
// });

// script for eyeball
document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 360;
        eye.style.transform = "rotate(" + rotation + "deg)"

    });
}


// script for lottie
let lottiePlayer = lottie.loadAnimation({
    container: document.querySelector(".lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    // path: "https://assets6.lottiefiles.com/packages/lf20_jtzvwi8m.json",
    path: "https://assets10.lottiefiles.com/packages/lf20_qvdEs6.json"
    // path:"https://assets3.lottiefiles.com/packages/lf20_idfeTI.json"
});

// gsap.to('.lottie',{ duration: 2, width:'1000px'})
// gsap.from('.text-container', { duration: 1, color:'#000'})
gsap.to("body", {
    duration: 3,
    opacity: '100%'
});