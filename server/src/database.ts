import { DataSource } from 'typeorm';

export var database: DataSource;

export async function connectDatabase() {
  if (database) {
    return;
  }

  database = new DataSource({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [
      __dirname + '/models/*.model.ts',
      __dirname + '/models/*.model.js',
    ],
  });

  await database.initialize();
  await database.synchronize();
}
