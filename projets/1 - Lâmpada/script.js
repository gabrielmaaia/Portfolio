var lamp = document.getElementById("lamp")
var lampon = false

lamp.addEventListener("click", function(){
    if (lampon) {
        lamp.src = "assets/lamp_off.png"
        lamp.alt = "Lâmpada apagada !"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        lampon = false
    } else {
        lamp.src = "assets/lamp_on.png"
        lamp.alt = "Lâmpada acesa !"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
        lampon = true
    }

})

