const { Client } = require('pg');

// Conexión a la BBDD
const connection = async () => {
    const client = new Client({
        user: 'postgres',
        password: 'usuario',
        host: 'localhost',
        port: 5432,
        database: 'myfutclub'
    });

    try {
        await client.connect();
        console.log("Conectado correctamente a BBDD: myfutclub.")
    } catch (error) {
        console.log(error);
        throw new Error("Error, no se ha podido conectar a la BBDD: myfutclub.");
    } finally {
        await client.end();
    }
}

module.exports = {
    connection
}
