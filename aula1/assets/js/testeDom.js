//alert('oi')

function dizerOi (){
    let btnOi = document.getElementById('btnOi')
    alert('oi')
    if (btnOi.innerHTML == "oi"){
        btnOi.innerHTML = "tchau"
        btnOi.classList.add('btnColor')
    }else{
        btnOi.innerHTML = "oi"
        btnOi.classList.remove('btnColor')
    }

}

function capturar(){
    let campo1 = document.getElementById('campo1')
    console.log(campo1.value)
}