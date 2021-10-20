import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*rl.question("Digite um numero: ", numero => {
    console.log(numero*2);
    rl.close();
})*/


pergunta();

function pergunta() {
    
    rl.question("Digite um numero: ", numero => {
        const multiplos = [];
        for (let index = 0; index < parseInt( numero); index++) {
            if (index%2==0) {
                multiplos.push(index)
            }
        }
        console.log(`Os multiplos sao: ${multiplos}`);
        rl.question("Deseja continuar? 1 - n 2 - y ", num =>{
            (num==1) ? rl.close() : pergunta();
        })
        
    })
    
}
