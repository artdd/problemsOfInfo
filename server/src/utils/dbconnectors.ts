import { createConnection } from 'typeorm';

const initConnection = () =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'admin',
    database: 'web',
    entities: ['./dist/src/models/*.js'],
    synchronize: true,
  });

export default initConnection;
