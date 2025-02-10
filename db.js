import { DuckDBInstance } from '@duckdb/node-api';

const dbPath = 'db.db'
console.log('dbPath:', dbPath)
console.log(`>>>>>>>>> 🛢️  Database Path: ${dbPath}`)

const instance = await DuckDBInstance.create(dbPath);
export default instance