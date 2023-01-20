const botonCalcular=document.getElementById('calcular');

const  calculadoraImc =()=> {

  const peso=document.getElementById('peso').value;
  const altura=document.getElementById('altura').value/100;
  const resultado=document.getElementById('resultado');
  const imc = (peso/(altura*altura));

  if((imc <= 25.0) && (imc >= 18.5)){
    resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro, del rango de peso normal o saludable`;
  }

  else if(imc < 18.5){
    resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro, del rango de peso insuficiente.`;
  }
      
  else if((imc > 25.0) && (imc < 29.9)){
    resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro , del rango de sobre peso.`;
  }

  else if(imc > 30.0){
    resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra, dentro del rango de obesidad.`;
  }

  else resultado.textContent=`Llene los campos requeridos.`;
}

botonCalcular.addEventListener("click", calculadoraImc);
  
  
  
  
