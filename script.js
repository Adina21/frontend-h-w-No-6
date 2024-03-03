const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const btn_close = document.getElementsByClassName("close")[0]

btn.onclick = function () {
    modal.style.display = "block"
}

btn_close.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
}