let a = 1;
var b = 1;
const t = 4;

//Usar atribuição via desestruturação
let primos = [2,3,5,6];

let [p1, p2, ...restos] = primos;
console.log(p1, restos)


let cursos = {
    nome: "ti",
    modulo: 3,
    presencial: true
}

let {nome, ...restocursos} = cursos;

console.log(nome)

let {nome: NomeDoCuro} = cursos
console.log(NomeDoCuro)

function nomee({nome}) {
    console.log(nome)
}

nomee(cursos)





//spread operator
let primos2 = [1212,...primos, 2000, 23242,1212]
let cursos2 = {
    ...cursos,
    ativo: false
}


//template literalis

console.log(`spread operator ${primos2}`)