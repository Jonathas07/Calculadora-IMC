

function calculoIMC(){
    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let resultado = document.querySelector('.Resultado')

    if(nome==''||peso==''||altura==''||peso<=0||altura<=0){
        alert('[Error] Preencha todos os dados correntamente por favor!!')
    }

    
        let imc = peso / (altura*altura)
    

    if(imc<18.5){
        let result_imc = 'a BAIXO DO PESO IDEAL!!'    
        resultado.innerHTML = `Sr.(a) ${nome}, seu IMC é: ${imc.toFixed(2)} e você esta ${result_imc}`
        result_imc = ''
    }
    if(imc<24.9&&imc>18.4){
        let result_imc = 'no PESO IDEAL, Parabens!!' 
        resultado.innerHTML = `Sr.(a) ${nome}, seu IMC é: ${imc.toFixed(2)} e você esta ${result_imc}`
        result_imc = ''
    }
    if(imc<29.9&&imc>24.8){
        let result_imc = 'com EXCESSO DE PESO.' 
        resultado.innerHTML = `Sr.(a) ${nome}, seu IMC é: ${imc.toFixed(2)} e você esta ${result_imc}`
        result_imc = ''
    }
    if(imc>30){
        let result_imc = 'com OBESIDADE. Cuidado!!' 
        resultado.innerHTML = `Sr.(a) ${nome}, seu IMC é: ${imc.toFixed(2)} e você esta ${result_imc}`
        result_imc = ''
    }
    if(imc>35){
        let result_imc = 'com OBESIDADE EXTREMA!' 
        resultado.innerHTML = `Sr.(a) ${nome}, seu IMC é: ${imc.toFixed(2)} e você esta ${result_imc}`
        result_imc = ''
    }
}