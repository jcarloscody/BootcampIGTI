/*
PostgreSQL

SGBD open source
criado em 85
usa SQL
https://www.elephantsql.com/


colunas propriedades
linhas: registros
tipos de dados: int, varchar, date, timestamp, numeric...
*/



/*
MODELAGEM SQL
modelo que representa as tabelas, suas propriedades e relacoes



SERIAL - incrementa
*/


CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    cpf VARCHAR NOT NULL,
    phone  VARCHAR NOT NULL,
    email  VARCHAR NOT NULL,
    address  VARCHAR NOT NULL
)

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    suplier_id INT NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    value NUMERIC NOT NULL,
    stock INT NOT NULL,
CONSTRAINT fk_supplier FOREIGN KEY (suplier_id) REFERENCES supliers (suplier_id)
)

CREATE TABLE sales(
    sale_id SERIAL PRIMARY KEY,
    client_id INT NOT NULL,
    product_id INT NOT NULL,
    value NUMERIC NOT NULL,
    date DATE NOT NULL,
CONSTRAINT fk_client FOREIGN KEY (client_id ) REFERENCES clients(client_id),
CONSTRAINT fk_product FOREIGN KEY (product_id ) REFERENCES products(product_id)
)
