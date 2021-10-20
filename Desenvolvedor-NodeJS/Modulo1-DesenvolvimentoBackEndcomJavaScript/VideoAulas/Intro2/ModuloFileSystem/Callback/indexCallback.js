import fs from "fs" //trabalhando com um modulo nativo do node - file sytem. trabalhando com callback

fs.writeFile("teste.txt", "blbbla bblablbablba", function(erro){ //metodo para escrever no arquivo. se o arquivo nao existir ele cria
    if (erro) {
        console.log(erro)
    }else{
        fs.appendFile("teste.txt", "\n estou concatenando n os dados", function(erro){//aqui escreve no arquivo sem sobrepor
            if(erro){
                console.log("deu merda")
            }else{
                fs.readFile("teste.txt", "utf-8",function(erro, dados){ //vai ler. é importante colocar o formato de string, pois caso contrário sairá em bytes
                    if(erro){
                        console.log(erro)
                    }else{
                        console.log(dados)
                    }
                })
            }
        })

        
    }
})

