import dbConn from './db.js'
const db = await dbConn
const conn = await db.connect()

const sql = `select * from FIFA_RANKINGS`
const result = await conn.stream(sql);

for await (const row of await result.getRows()) {
    console.log(row)
}
