const toggleBtn = document.querySelector(".menu-toggle");
const main = document.querySelector('main')
let btnText = toggleBtn.textContent



toggleBtn.addEventListener("click", function(){
    main.classList.toggle('open')
    if (main.classList.contains('open')) {
        toggleBtn.innerHTML = '<img src="/assets/close.svg"/> Close'
    } else {
        toggleBtn.innerHTML = '<img src="/assets/menu.svg"/> Close'

    }
    
})