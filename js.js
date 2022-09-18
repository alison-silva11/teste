let gerarNumeros = [];
let numero_sorteado = 0;
let numeros = [];

for (let i = 1; i <= 80; i++){
    gerarNumeros.push(i);    
}



for(let a = 0; a <= 4; a++){
    numero_sorteado = gerarNumeros[Math.floor(gerarNumeros.length * Math.random())];
    gerarNumeros.splice(gerarNumeros.indexOf(numero_sorteado), 1);
    numeros.push(numero_sorteado);
    gerarNumeros.slice(numero_sorteado);
}

    let print = document.write(numeros.sort());



    
