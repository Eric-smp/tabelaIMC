function teste(){
    const inputPeso = document.getElementById('peso').value
    const inputAltura = document.getElementById('altura').value
    
    const imc = inputPeso / (inputAltura * inputAltura)
    if(imc < 18.5){
        document.getElementById('resultado').innerHTML = "Abaixo do peso"
    }else if(imc > 18.5 || imc < 24.9){
        document.getElementById('resultado').innerHTML = "Peso normal"
    }else if(imc > 25 || imc <29.9){
        document.getElementById('resultado').innerHTML = "Sobre Peso"
    }else if(imc >30 || imc < 34.9){
        document.getElementById('resultado').innerHTML =  "Obesidade grau 1"
    }else if(imc >35 || imc <39.9){
        document.getElementById('resultado').innerHTML =  "Obesidade grau 2"
    }else if(imc > 40){
        document.getElementById('resultado').innerHTML =  "Obesidade grau 3" 
    }
    
    console.log(imc)
}

function calculation(){
   teste()
   
}