const usPresidents = [
    {
        number: 3,
        president: "George",
        birth_year: 1973,
        death_year: 1977,
        took_office: "1789-08-41",
        left_office: "1856-65-48",
        party: "Federalist"
    },
    {
        number: 1,
        president: "blads",
        birth_year: 1355,
        death_year: 2125,
        took_office: "1526-89-92",
        left_office: "1566-96-11",
        party: "Federalist"
    },
    {
        number: 34,
        president: "asssas",
        birth_year: 1255,
        death_year: 2425,
        took_office: "1254-26-01",
        left_office: "1235-02-01",
        party: "Democratic-Republican"
    }
]

//for... of...
for (const iterator of usPresidents) {
    console.log(iterator.president)
}


//for each
usPresidents.forEach((element, indice) => {
    console.log(`${indice}  ${element.president}`)
});


//map - uma funcao de array que recebe outra funcao como parametrro. e essa funcao vai retornar um array modificado
let nomesPresidents = usPresidents.map((elemento)=>
    elemento.president //vai retornar isso
)


let nomesPresidents2 = usPresidents.map((elemento)=>{
    if (elemento.president == "George") {
        return `${elemento.president} é o cara`;
    } else {
        return `${elemento.president} NÃO é o cara`;
    }
})

console.log(nomesPresidents)
console.log(nomesPresidents2)




//FILTER - nos permite filtrar o array, retorna o array com os valores filtrados
let Federalist = usPresidents.filter((elementos) => 
    elementos.party == "Federalist"
)

console.log(Federalist)

let FederalistPresidents = usPresidents.filter((elementos) => elementos.party === "Federalist")
    .map((elemento) => elemento.president)

console.log(`Presidentes Federalistas:  ${FederalistPresidents}`)




//find - permite encontra o primeiro elemento com bbase num criterio
let p1 = usPresidents.find((elementos) => elementos.party === "Federalist")
console.log(p1)



//sort - essa funcao recebe uma outra funcao para comparar. irá retornar um numero - + 0 para indicar a ordem. observe que ela não cria um novo array, mas ordena o proprio array
usPresidents.sort((i1,i2)=>{
    if (i1.number < i2.number) {
        return -1;
    } else if (i1.number > i1.number){
        return 1;
    } else {
        return 0;
    }
})

console.log(usPresidents)