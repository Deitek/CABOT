let initSqlJs;
initSqlJs = require('sql.js');

initSqlJs().then(SQL => {

    // Create a database
    const db = new SQL.Database();
    // NOTE: You can also use new SQL.Database(data) where
    // data is an Uint8Array representing an SQLite database file

    // Execute some sql
    let sqlstr;

    /*
    CREATE TABLE "interactions" (
        "InteractionId"	INTEGER,
        "UserId"	INTEGER NOT NULL,
        "CorrelationId"	TEXT,
        "IpAddress"	TEXT,
        "SearchSentence"	TEXT,
        "SearchResult"	BLOB,
        "SearchOcurrencies"	BLOB,
        "SearchDateTime"	TEXT,
        PRIMARY KEY("InteractionId")
    );
     */

    sqlstr = "CREATE TABLE \"interactions\" (\n        \"InteractionId\"\tINTEGER,\n        \"UserId\"\tINTEGER NOT NULL,\n        \"CorrelationId\"\tTEXT,\n        \"IpAddress\"\tTEXT,\n        \"SearchSentence\"\tTEXT,\n        \"SearchResult\"\tBLOB,\n        \"SearchOcurrencies\"\tBLOB,\n        \"SearchDateTime\"\tTEXT,\n        PRIMARY KEY(\"InteractionId\")\n);";
/*
    sqlstr += "INSERT INTO interactions VALUES (0, 'hello');"
    sqlstr += "INSERT INTO interactions VALUES (1, 'world');"
 */

    db.run(sqlstr);
    // Run the query without returning anything
});