// Parametros na função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// ordem dos parametros
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade(29, "Maria Camila"));


function multiplica(num3, num4) {
    return num3 * num4;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
