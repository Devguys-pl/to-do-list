const mysql = require('mysql2/promise');

(async() => {

    const pool = await  mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'todolist',
        decimalNumbers: true,
        namedPlaceholders: true,
    });
})();


module.exports = {
    db
}