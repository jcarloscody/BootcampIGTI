import pg from 'pg';

async function connect() {
    if (connection) {
        return connection.connect()
    }

    const pool = new pg.Pool({ //pool de conexao:::  acelera a conexao com o bd.  o bd tem um limite de conexoes que consegue manter de forma simultanea, ai entra a nocao de pool "piscina" de conexoes então ele consegue gerenciar, ver quando é necesspario criar uma nova conexao ou se dar para aproveitar uma conexao ja criada
        connectionString: "postgres://lakjazml:s5-0TMuxA8MXv3qHFQF5fZ2XT2AVCtEC@fanny.db.elephantsql.com/lakjazml" //a forma de conexao

    })

    global.connection = pool;
    return pool.connect();
}


export {
    connect
}