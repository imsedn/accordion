let btn = document.querySelector(".btn");
btn.onclick = function () {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("open");
}

let acord = document.querySelectorAll('.headline');
for(let i = 0; i< acord.length; i++) {
    let headline = acord[i];
    headline.addEventListener("click", addClass);
    function addClass() {
        for(let i = 0; i< acord.length; i++) {
            let headline = acord[i];
            headline.classList.remove("open");
        }
    this.classList.add("open");
    }
 }
 






















  // headline.onclick = function() {
    //     headline.classList.toggle("open");
    // }