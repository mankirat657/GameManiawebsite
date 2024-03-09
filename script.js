const Switch = document.querySelector(".colorSwitcher");
const switchInfo = document.querySelector(".colorSwitchInfo");
let toggle = 0
Switch.addEventListener("click",()=>{
    if(toggle =! toggle){
        Switch.style.right = "11%"
        Switch.style.transition = "0.5s ease"
        switchInfo.style.display = "block"
        switchInfo.style.right = "0%"
        switchInfo.style.transition = "0.5s ease"
    }
    else{
        Switch.style.right = "0%"
        Switch.style.transition = "0.5s ease"
        switchInfo.style.display = "none"
        switchInfo.style.right = "-120%"
        switchInfo.style.transition = "0.5s ease"
    }
})
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left : " + e.clientX + "px; top: " + e.clientY + "px;"
});
let card = document.querySelector(".gameCard")
let card10 = document.querySelector(".gameCard1")
let cardContent = document.querySelector(".gameCard .gameTopPortion")
let cardContent2 = document.querySelector(".gameCard .gameBottomPortion")
let card2 = document.querySelector(".gameCard2")
let card1 = document.querySelector(".gameCard1 .iconPlay")
let cardImg = document.querySelector(".gameCard3 .iconPlay")
let cardImg2 = document.querySelector(".gameCard4 .iconPlay")
let cardImg3 = document.querySelector(".gameCard5 .iconPlay")
let cardImg4 = document.querySelector(".gameCard6 .iconPlay")
let cardImg5 = document.querySelector(".gameCard7 .iconPlay")
let card3 = document.querySelector(".gameCard3")
let card4 = document.querySelector(".gameCard4")
let card5 = document.querySelector(".gameCard5")
let card6 = document.querySelector(".gameCard6")
let card7 = document.querySelector(".gameCard7")
let play = document.querySelector(".gameCard2 .iconPlay")
let top2 = document.querySelector(".top2")
let bottom2 = document.querySelector(".bottom2")
let top1 = document.querySelector(".top1")
let bottom1 = document.querySelector(".bottom1")
let top3 = document.querySelector(".top3")
let bottom3 = document.querySelector(".bottom3")
let top4 = document.querySelector(".top4")
let bottom4 = document.querySelector(".bottom4")
let top5 = document.querySelector(".top5")
let bottom5 = document.querySelector(".bottom5")
let top6 = document.querySelector(".top6")
let bottom6 = document.querySelector(".bottom6")
let top7 = document.querySelector(".top7")
let bottom7 = document.querySelector(".bottom7")
card1.addEventListener("click",()=>{
    card10.style.width = "34vw"
    card10.style.transition = "0.5s ease"
    card1.style.display = "none"
    card2.style.width = "12vw"
    card3.style.width = "12vw"
    card4.style.width = "12vw"
    card5.style.width = "12vw"
    card6.style.width = "12vw"
    card7.style.width = "12vw"
    play.style.display = "block"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top1.style.display = "block"
    bottom1.style.display = "block"
    top3.style.display = "none"
    bottom3.style.display = "none"
    top4.style.display = "none"
    bottom4.style.display = "none"
    top5.style.display = "none"
    bottom5.style.display = "none"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"
})
play.addEventListener("click",()=>{
    card2.style.width = "34vw"
    play.style.display = "none"
    card2.style.transition = "0.5s ease"
    card.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card1.style.display = "block"
    card3.style.width = "12vw"
    cardImg.style.display ="block"
    card3.style.width = "12vw"
    card4.style.width = "12vw"
    card5.style.width = "12vw"
    card6.style.width = "12vw"
    card7.style.width = "12vw"
    top2.style.display = "block"
    bottom2.style.display =  "block"
    top3.style.display = "none"
    bottom3.style.display =  "none"
    top4.style.display = "none"
    bottom4.style.display = "none"
    top5.style.display = "none"
    bottom5.style.display = "none"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"
})
cardImg.addEventListener("click",()=>{
    card3.style.width = "34vw"
    card4.style.width = "12vw"
    card5.style.width = "12vw"
    card6.style.width = "12vw"
    card7.style.width = "12vw"
    
    play.style.display = "block"
    card3.style.transition = "0.5s ease"
    card2.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card2.style.display = "block"
    card1.style.display = "block"
    card.style.width = "12vw"
    cardImg.style.display = "none"
    card4.style.width = "12vw"
    cardImg2.style.display = "block"
    card4.style.width = "12vw"
    cardImg2.style.display = "block"
    card2.style.width = "12vw"
    top3.style.display = "block"
    bottom3.style.display = "block"
    top1.style.display = "none"
    bottom1.style.display = "none"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top4.style.display = "none"
    bottom4.style.display = "none"
    top5.style.display = "none"
    bottom5.style.display = "none"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"
})
cardImg2.addEventListener("click",()=>{
    card4.style.width = "34vw"
    card5.style.width = "12vw"
    card6.style.width = "12vw"
    card7.style.width = "12vw"
    play.style.display = "block"
    card4.style.transition = "0.5s ease"
    card2.style.width = "12vw"
    card3.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card2.style.display = "block"
    card1.style.display = "block"
    card.style.width = "12vw"
    cardImg.style.display = "block"
    cardImg2.style.display = "none"
    card5.style.width = "12vw"
    cardImg3.style.display = "block"
    top4.style.display = "block"
    bottom4.style.display = "block"
    top3.style.display = "none"
    bottom3.style.display ="none"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top1.style.display = "none"
    bottom1.style.display = "none"
    top5.style.display = "none"
    bottom5.style.display = "none"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"
})
cardImg3.addEventListener("click",()=>{
    card5.style.width = "34vw"
    card6.style.width = "12vw"
    card7.style.width = "12vw"
    play.style.display = "block"
    card5.style.transition = "0.5s ease"
    card2.style.width = "12vw"
    card3.style.width = "12vw"
    card4.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card2.style.display = "block"
    card1.style.display = "block"
    card.style.width = "12vw"
    cardImg.style.display = "block"
    cardImg2.style.display = "block"
    cardImg3.style.display = "none"
    card6.style.width = "12vw"
    cardImg4.style.display = "block"
    top5.style.display = "block"
    bottom5.style.display = "block"
    top1.style.display = "none"
    bottom1.style.display = "none"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top3.style.display = "none"
    bottom3.style.display = "none"
    top4.style.display = "none"
    bottom4 .style.display = "none"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"
})
cardImg4.addEventListener("click",()=>{
    card6.style.width = "34vw"
    card7.style.width = "12vw"
    play.style.display = "block"
    card6.style.transition = "0.5s ease"
    card2.style.width = "12vw"
    card3.style.width = "12vw"
    card4.style.width = "12vw"
    card5.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card2.style.display = "block"
    card1.style.display = "block"
    card.style.width = "12vw"
    cardImg.style.display = "block"
    cardImg2.style.display = "block"
    cardImg3.style.display = "block"
    cardImg4.style.display = "none"
    card7.style.width = "12vw"
    cardImg5.style.display = "block"
    top6.style.display = "block"
    bottom6.style.display = "block"
    top1.style.display = "none"
    bottom1.style.display = "none"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top3.style.display = "none"
    bottom3.style.display = "none"
    top4.style.display = "none"
    bottom4 .style.display = "none"
    top5.style.display = "none"
    bottom5 .style.display = "none"
    top7.style.display = "none"
    bottom7.style.display = "none"

})
cardImg5.addEventListener("click",()=>{
    card7.style.width = "34vw"
    play.style.display = "block"
    card7.style.transition = "0.5s ease"
    card2.style.width = "12vw"
    card3.style.width = "12vw"
    card4.style.width = "12vw"
    card5.style.width = "12vw"
    card6.style.width = "12vw"
    cardContent.style.display = "none"
    cardContent2.style.display = "none"
    card2.style.display = "block"
    card1.style.display = "block"
    card.style.width = "12vw"
    cardImg.style.display = "block"
    cardImg2.style.display = "block"
    cardImg3.style.display = "block"
    cardImg4.style.display = "block"
    cardImg5.style.display = "none"
    top7.style.display = "block"
    bottom7.style.display = "block"
    top6.style.display = "none"
    bottom6.style.display = "none"
    top1.style.display = "none"
    bottom1.style.display = "none"
    top2.style.display = "none"
    bottom2.style.display = "none"
    top3.style.display = "none"
    bottom3.style.display = "none"
    top4.style.display = "none"
    bottom4 .style.display = "none"
    top5.style.display = "none"
    bottom5 .style.display = "none"
})

const wrapper = document.querySelector(".wrapper")
const emoji = document.querySelector(".emoji");
const textarea = document.querySelector(".textarea");
const btnn = document.querySelector(".btnn");
emoji.addEventListener("click",(e)=>{
    if(e.target.className.includes('emoji')) return;
    textarea.classList.add("textarea--active");
    btnn.classList.add("btnn--active");
})

wrapper.addEventListener("mouseleave",()=>{
    textarea.classList.remove('textarea--active')
    btnn.classList.remove("btnn--active");
})
let thumbnail = document.getElementsByClassName("thumbnail")
let activeImages = document.getElementsByClassName("active")
for(var i = 0;i<thumbnail.length;i++){
    thumbnail[i].addEventListener("mouseover",function(){
         if(activeImages.length>0){
            activeImages[0].classList.remove("active")
         }
        this.classList.add('active')
        document.getElementById("featured").src = this.src;
    })
}

let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft")

buttonLeft.addEventListener("click",function(){
    document.getElementById("slider").scrollLeft -= 180
})
buttonRight.addEventListener("click",function(){
    document.getElementById("slider").scrollLeft += 180
})

let next = document.querySelector('.next');
let prev = document.querySelector(".prev")
next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item2');
    document.querySelector('.slide').appendChild(items[0]);
})
prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item2');
    document.querySelector('.slide').prepend(items[items.length-1]);
})

const down = document.querySelector("#down")
const change = document.querySelector(".dropdown")
let to = 0;
down.addEventListener("click",()=>{
    if(to=!to){
        down.src = "images/up.png"
        change.style.right = "0%"
        // change.style.display = "block"
    }
    else{
        down.src = "images/icons8-down-arrow-50.png"
        change.style.right = "-100%"
        // change.style.display = "none"
    }
})

const cross= document.querySelector("#cross")
const  men= document.querySelector("#men")
let nav = document.querySelector(".mobileNavigation")
men.addEventListener("click",()=>{
    nav.style.width = "75%"
    nav.style.transition = "0.5s ease"
})
cross.addEventListener("click",()=>{
    nav.style.width =  "0%"
    
})