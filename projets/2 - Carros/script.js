var result = document.getElementById("result");
var car_red = document.getElementById("red");
var car_white = document.getElementById("white");
var btn_circle_red = document.getElementById("vermelho");
var btn_circle_white = document.getElementById("branco");
var btns_ctrl = document.getElementsByClassName("btn");
var btn_reset = document.getElementById("resetar");
var car_select = null;

car_red.addEventListener("click", sel_car_red);
car_white.addEventListener("click", sel_car_white);
btn_circle_red.addEventListener("click", sel_car_red);
btn_circle_white.addEventListener("click", sel_car_white);
btns_ctrl[0].addEventListener("click", reset)
btns_ctrl[1].addEventListener("click", acel)
btns_ctrl[2].addEventListener("click", desacel)

// Declarar funções

//Função ao selecionar carro vermelho
function sel_car_red(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";

    result.textContent = "Vermelho";

    car_select = car_red;
    btns_ctrl_block_fun();
}

//Função ao selecionar carro branco
function sel_car_white(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    result.textContent = "Branco";

    car_select = car_white;
    btns_ctrl_block_fun();
}

//botões de controle - mostrar
function btns_ctrl_block_fun(){
    for(i=0; i<= 2; i++){
        btns_ctrl[i].style.display = "block";
    }
}

//botões de controle - ocultar
function btns_ctrl_none_fun(){
    for(i=0; i<= 2; i++){
        btns_ctrl[i].style.display = "none";
    }
}

//quando resetar
function reset(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    result.textContent = "?";
    location.reload();

    btns_ctrl_none_fun();
}

function acel() {
    if (!car_select) return;
    
    var top = parseInt(window.getComputedStyle(car_select).top);
    var height = parseInt(window.getComputedStyle(car_select).height);
    
    top = top - 1;
    height = height - 1;
    
    if (car_select === car_red) {
        
        var right = parseInt(window.getComputedStyle(car_select).right);
        right = right + 0.6;
        car_select.style.right = right + "px";
    } else {
        var left = parseInt(window.getComputedStyle(car_select).left);
        left = left + 1;
        car_select.style.left = left + "px";
    }
    
    car_select.style.top = top + "px";
    car_select.style.height = height + "px";
}


function desacel() {
    if (!car_select) return;
    
    var top = parseInt(window.getComputedStyle(car_select).top);
    var height = parseInt(window.getComputedStyle(car_select).height);
    
    top = top + 1;
    height = height + 1;
    
    if (car_select === car_red) {
        
        var right = parseInt(window.getComputedStyle(car_select).right);
        right = right + 0.6;
        car_select.style.right = right + "px";
    } else {
        
        var left = parseInt(window.getComputedStyle(car_select).left);
        left = left - 0.6;
        car_select.style.left = left + "px";
    }
    
    car_select.style.top = top + "px";
    car_select.style.height = height + "px";
}

document.addEventListener("keydown", function(event){
    var tecla = event.key;
    console.log(tecla);
    if(tecla == "ArrowUp"){
        acel()
    }
    if(tecla == "ArrowDown"){
        desacel()
    }
})