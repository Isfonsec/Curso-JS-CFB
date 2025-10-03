// Operador Spread, aprendendo sobre o espalhador em Javascript 

const soma=(v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1, 5, 4]

console.log(soma(...valores))