//cria um um servidor http que possa receber solicitacoes requisicoes. temos o express tbm qe é um modulo simplificado para criarmos este server
//https://www.youtube.com/watch?list=PLliVpcscu0l5knbl572pzTYxFdj6Zw5ro&v=np2SpwJWKzs
import http from "http";

//criar com o metodo createServer que recebera uma callback que tratará as requisições.  e vai retornar uma variavel e em cima dela executar o metodo listening
http.createServer((request, response) => {
    if ((request.method === "GET") && (request.url === "/test")){
        response.write("esta pagina está em teste");
    } else {
        response.write("Hello guys there");
    }
    response.statusCode = 200;    
    response.end(); //encerra a requisicao
}).listen(8081);

