


/**
 TDD - O CLICO
    dividido em 3 partes, 
        red - cria o teste, executa o teste e garante que está falhando
        green -  cria a implementacao que vai resolver o teste
        blue - refactor, 


packege.json ->>>>
        por padrão já vem um script de test de erro. 
        vc deixará assim -- "test": "jest"   /// logo após instalar a biblioteca jest



INSTALAÇÃO DA BIBLIOTECA(jest) DE TESTE   ->>>  npm install --save-dev jest
    --save-dev  -> o dev indica que será usado apenas em tempo de desenvolvimento
    ->> o professor está usando a versão 27.0.5 -> qq erro pode forçar para usar esta versao



ORGANIZAÇÃO 
    src - onde fica a aplicacao
    test - onde fica os arquivos de testes
        o jest tem varias forma de trabalhar, uma delas é colocar no arquivo de teste .test.js e ele vai reconhecer este arquivo como que de teste.
        outra forma é usar uma paste com o nome __test__



EXECUTANDO UM TESTE
    após implementar o teste só rodar o comand
    npm test



BIBLIOTECA  - serve para ajudar a manter o codigo razoavelmente organizado 
    -> npm i --save-dev eslint
    
    -> Configuração ::::: 
        npx eslint -- init     (vai fazer una serie de perguntas como o package.json)
    
    -> Para executar
        npx eslint *     (vai rodar em todos os arquivos) se nao der certo
        npx eslint src/**  test/**

    -> Colocar no .eslintrc.json - "env":
        "commonjs": true,
        "jest": true

    -> Colocar no "scripts" do package.json
        "lint": "eslint src/**  test/** --fix"

    -> Para consertar
        npx eslint src/**  test/** --fix
    
    -> Para executar: npm run lint

npm i --save-dev eslint   |    npx eslint --init
npx eslint * , executando por linha de comandos
npx eslint src/**  test/**
adiciona no eslintrc.json o jest   
    npm run lint




 "WATCH"- permite que visualize em tempo real as alterações realizadas. package
 npm run watch

*/