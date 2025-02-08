import { DuckDBInstance } from '@duckdb/node-api';
import "jsr:@std/dotenv/load";

const dbPath = 'db.db'
console.log('dbPath:', dbPath)
console.log(`>>>>>>>>> 🛢️  Database Path: ${dbPath}`)

const instance = await DuckDBInstance.create(dbPath);
export default instance